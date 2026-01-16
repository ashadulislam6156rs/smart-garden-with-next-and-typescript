import { mongoConnect } from "@/lib/mongoConnect";
import { TProducts } from "@/types/TProducts";
import { NextRequest, NextResponse } from "next/server";


// GET all products
export async function GET() {
  try {
    const { db } = await mongoConnect();
    const products = await db.collection("products").find().toArray();
    // client.close();

    const formattedProducts = products.map((product) => ({
      id: product._id.toString(),
      title: product.title,
      category: product.category,
      image: product.image,
      shortDescription: product.shortDescription,
      currency: product.pricing.currency,
      originalPrice: product.pricing.originalPrice,
      discountPrice: product.pricing.discountPrice,
      discountPercent: product.pricing.discountPercent,
      warranty: product.warranty,
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}



// POST new event
export async function POST(req: NextRequest) {
  try {
    const { db, client } = await mongoConnect();
    const data: TProducts = await req.json();

    // Basic validation
    if (!data.title || !data.category) {
      client.close();
      return NextResponse.json(
        { error: "Title and category required" },
        { status: 400 }
      );
    }

    const result = await db.collection("products").insertOne({
      ...data,
      createdAt: new Date(),
    });

    // client.close();
    return NextResponse.json(
      { message: "Product created", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
