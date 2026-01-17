import { mongoConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

// GET all offers product
export async function GET() {
  try {
    const { db } = await mongoConnect();
    const products = await db.collection("products").find().limit(6).toArray();
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