import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, password, gender, role, phone, photoURL } = body;

    const client = await clientPromise;
    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      fullName,
      email,
      password: hashedPassword,
      gender,
      role,
      phone,
      photoURL,
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
