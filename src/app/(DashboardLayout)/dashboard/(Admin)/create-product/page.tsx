"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TProductDetails } from "@/types/TProductDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function CreateProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProductDetails>();

  const router = useRouter();

  const onSubmit = async (data: TProductDetails) => {

    let finalPhotoURL = "";

    if (data.image && data.image.length > 0) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imgResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API_KEY}`,
        formData
      );
      finalPhotoURL = imgResponse.data.data.url;
      }

      const pricing1 = data.pricing;
      pricing1.currency = "USD";

      const newProduct = {
        slug: data.title,
        title: data.title,
        gallery: data.gallery?.trim().split(","),
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        category: data.category,
        tags: data.tags.trim().split(","),
        pricing: pricing1,
        stock: data.stock,
        badge: {
          text: null,
          color: null,
        },
        timeLeft: data.timeLeft,
        rating: {
          average: 0,
          totalReviews: 0,
        },
        features: data.features.trim().split(","),
        specifications: {
          plantCount: 0,
          potMaterial: null,
          lightRequirement: null,
          wateringFrequency: null,
          petFriendly: false,
        },
        careInstructions: data.careInstructions.trim().split(","),
        delivery: {
          estimatedTime: "3-5 business days",
          shippingCost: "Free",
          returnPolicy: "7 days easy return",
        },
        seller: {
          name: "SmartGarden",
          verified: true,
          supportEmail: "support@smartgarden.com",
        },
        image: finalPhotoURL,
        warranty: null,
        createdAt: new Date(),
      };


    const res = await axios.post("/api/products", newProduct);

    if (res) {
      alert("Product created successfully!");
      router.push("/products");
    } else {
      alert("Failed to create product");
    }
  };

  return (
    <main className="flex items-center justify-center md:p-4">
      <Card className="w-full md:max-w-4xl">
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
          <CardDescription>
            Fill in the details to create a new product
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5 pb-5">
              {/* LEFT GROUP */}
              <FieldGroup>
                {/* Title */}
                <Field>
                  <FieldLabel>Title</FieldLabel>
                  <Input
                    placeholder="e.g. Indoor Plant Bundle"
                    {...register("title", { required: true })}
                  />
                </Field>

                {/* Short Description */}
                <Field>
                  <FieldLabel>Short Description</FieldLabel>
                  <Textarea
                    placeholder="Enter short description"
                    {...register("shortDescription", { required: true })}
                  ></Textarea>
                </Field>

                {/* Long Description */}
                <Field>
                  <FieldLabel>Long Description</FieldLabel>
                  <Textarea
                    placeholder="Enter long description"
                    {...register("longDescription", { required: true })}
                  ></Textarea>
                </Field>

                {/* Category */}
                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <Input
                    placeholder="e.g. Indoor Plants"
                    {...register("category", { required: true })}
                  />
                </Field>

                {/* Tags */}
                <Field>
                  <FieldLabel>Tags (comma separated)</FieldLabel>
                  <Input
                    placeholder="e.g. indoor, home decor, air purifying"
                    {...register("tags")}
                  />
                </Field>

                {/* Upload Image */}
                <Field>
                  <FieldLabel>Main Image</FieldLabel>
                  <Input
                    {...register("image", { required: true })}
                    type="file"
                  />
                </Field>

                {/* Gallery */}
                <Field>
                  <FieldLabel>Gallery Images</FieldLabel>
                  <Input
                    type="text"
                    placeholder="url1, url2, url3"
                    {...register("gallery")}
                  />
                </Field>
              </FieldGroup>

              {/* RIGHT GROUP */}
              <FieldGroup>
                {/* Original Price */}
                <Field>
                  <FieldLabel>Original Price</FieldLabel>
                  <Input
                    placeholder="e.g. 149"
                    type="number"
                    {...register("pricing.originalPrice")}
                  />
                </Field>

                {/* Discount Price */}
                <Field>
                  <FieldLabel>Discount Price</FieldLabel>
                  <Input
                    placeholder="e.g. 89"
                    type="number"
                    {...register("pricing.discountPrice")}
                  />
                </Field>

                {/* Discount Percent */}
                <Field>
                  <FieldLabel>Discount %</FieldLabel>
                  <Input
                    type="number"
                    placeholder="e.g. 40"
                    {...register("pricing.discountPercent")}
                  />
                </Field>

                {/* Stock Status */}
                <Field>
                  <FieldLabel>Stock Status</FieldLabel>
                  <Input
                    placeholder="e.g. In Stock"
                    {...register("stock.status")}
                  />
                </Field>

                {/* Stock Quantity */}
                <Field>
                  <FieldLabel>Stock Quantity</FieldLabel>
                  <Input
                    type="number"
                    placeholder="e.g. 20"
                    {...register("stock.quantity")}
                  />
                </Field>

                {/* time left */}
                <Field>
                  <FieldLabel>Time left</FieldLabel>
                  <Input
                    placeholder="e.g. 2h 45m left"
                    {...register("timeLeft")}
                  />
                </Field>

                {/* careInstructions */}
                <Field>
                  <FieldLabel>Care Instructions (Coma separated)</FieldLabel>
                  <Input
                    placeholder="e.g. Avoid direct sunlight, Water when topsoil is dry, ..."
                    {...register("careInstructions")}
                  />
                </Field>

                {/* Rating */}
                {/* <Field>
                  <FieldLabel>Average Rating</FieldLabel>
                  <Input
                    type="number"
                    step="0.1"
                    {...register("rating.average")}
                  />
                </Field> */}

                {/* Reviews */}
                {/* <Field>
                  <FieldLabel>Total Reviews</FieldLabel>
                  <Input type="number" {...register("rating.totalReviews")} />
                </Field> */}

                {/* Features */}
                <Field>
                  <FieldLabel>Features (Coma separeted)</FieldLabel>
                  <Input
                    placeholder="e.g. Care Guide Included, Free Home Delivery, .."
                    {...register("features")}
                  />
                </Field>
              </FieldGroup>
            </div>

            {/* SUBMIT */}
            <Field>
              <Button type="submit">Create Product</Button>
            </Field>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
