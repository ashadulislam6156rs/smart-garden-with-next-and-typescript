import { mongoConnect } from "@/lib/mongoConnect";
import { TProductDetails } from "@/types/TProductDetails";
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
      stock: product.stock.status,
      stockQuantity: product.stock.quantity,
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



// POST new Product
export async function POST(req: NextRequest) {
  try {
    const { db, client } = await mongoConnect();
    const data: TProductDetails = await req.json();

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




