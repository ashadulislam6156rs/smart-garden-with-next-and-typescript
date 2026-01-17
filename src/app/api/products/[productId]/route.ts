import { mongoConnect } from "@/lib/mongoConnect";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// Get Product by ID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ productId: string }> },
) {
  try {
    const { productId } = await context.params;

    if (!ObjectId.isValid(productId)) {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 },
      );
    }

    const { db } = await mongoConnect();
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });
    // client.close();

    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { productId: string } },
) {
  try {
    const { productId } = await context.params;

    const { db } = await mongoConnect();
    const {
      title,
      shortDescription,
      longDescription,
      category,
      image,
      tags,
      gallery,
      features,
      careInstructions,
      pricing,
      stock,
      timeLeft,
    } = await req.json();

    const updateData = {
      $set: {
        title,
        shortDescription,
        longDescription,
        category,
        image,
        tags,
        gallery,
        features,
        careInstructions,
        pricing,
        stock,
        timeLeft,
      },
    };

    const result = await db
      .collection("products")
      .updateOne({ _id: new ObjectId(productId) }, updateData);

    // client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { productId: string } },
) {
  try {
    const { productId } = await context.params;

    const { db } = await mongoConnect();

    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(productId) });
    // client.close();

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 },
    );
  }
}