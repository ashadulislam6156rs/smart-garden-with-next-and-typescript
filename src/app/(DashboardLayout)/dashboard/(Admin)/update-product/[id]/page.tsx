"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TProductDetails } from "@/types/TProductDetails";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const params = useParams();
  const id = params?.id as string;

  const [loading, setLoading] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TProductDetails>({
    defaultValues: {
      title: "",
      shortDescription: "",
      longDescription: "",
      category: "",
      tags: [],
      image: "",
      gallery: [],
      pricing: {
        currency: "USD",
        originalPrice: 0.0,
        discountPrice: 0.0,
        discountPercent: 0.0,
      },
      stock: {
        status: "",
        quantity: 0,
      },
      timeLeft: "",
      careInstructions: [],
      features: [],
    },
  });

  // Fetch product data
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        const data: TProductDetails = res.data;

        reset({
          title: data.title,
          shortDescription: data.shortDescription,
          longDescription: data.longDescription,
          category: data.category,
          image: data.image,
          tags: data.tags || [],
          gallery: data.gallery || [],
          features: data.features || [],
          careInstructions: data.careInstructions || [],
          pricing: {
            originalPrice: data.pricing?.originalPrice || 0,
            discountPrice: data.pricing?.discountPrice || 0,
            discountPercent: data.pricing?.discountPercent || 0,
            currency: data.pricing?.currency || "USD",
          },
          stock: {
            status: data.stock?.status || "",
            quantity: data.stock?.quantity || 0,
          },
          timeLeft: data.timeLeft || "",
        });
      } catch (err) {
        toast.error("Fetch failed");
      }
    };

    fetchProduct();
  }, [id, reset]);

  const handleUpdateProduct = async (data: TProductDetails) => {
    setLoading(true);

    try {
      // Convert comma-separated strings to arrays for tags, features, gallery, careInstructions
      const payload = {
        ...data,
        tags: Array.isArray(data.tags)
          ? data.tags
          : (data.tags as unknown as string).split(",").map((t) => t.trim()),
        features: Array.isArray(data.features)
          ? data.features
          : (data.features as unknown as string)
              .split(",")
              .map((f) => f.trim()),
        careInstructions: Array.isArray(data.careInstructions)
          ? data.careInstructions
          : (data.careInstructions as unknown as string)
              .split(",")
              .map((c) => c.trim()),
        gallery: Array.isArray(data.gallery)
          ? data.gallery
          : (data.gallery as unknown as string).split(",").map((g) => g.trim()),
      };

      const res = await axios.patch(`/api/products/${id}`, payload);

      if (res) {
        toast.success("Product updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") return null;

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex items-center justify-center md:p-4">
      <Card className="w-full md:max-w-4xl">
        <CardHeader>
          <CardTitle>Update Product</CardTitle>
          <CardDescription>
            Fill in the details to update a product
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(handleUpdateProduct)}>
            <div className="flex flex-col md:flex-row gap-5 pb-5">
              {/* LEFT GROUP */}
              <FieldGroup>
                <Field>
                  <FieldLabel>Title</FieldLabel>
                  <Input
                    placeholder="e.g. Indoor Plant Bundle"
                    {...register("title", { required: true })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Short Description</FieldLabel>
                  <Textarea
                    placeholder="Enter short description"
                    {...register("shortDescription", { required: true })}
                  ></Textarea>
                </Field>

                <Field>
                  <FieldLabel>Long Description</FieldLabel>
                  <Textarea
                    placeholder="Enter long description"
                    {...register("longDescription", { required: true })}
                  ></Textarea>
                </Field>

                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <Input
                    placeholder="e.g. Indoor Plants"
                    {...register("category", { required: true })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Tags (comma separated)</FieldLabel>
                  <Input
                    placeholder="e.g. indoor, home decor, air purifying"
                    {...register("tags")}
                  />
                </Field>

                <Field>
                  <FieldLabel>Main Image</FieldLabel>
                  <Input
                    type="text"
                    placeholder="Enter image URL"
                    {...register("image", { required: true })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Gallery Images (comma separated)</FieldLabel>
                  <Input
                    type="text"
                    placeholder="url1, url2, url3"
                    {...register("gallery")}
                  />
                </Field>
              </FieldGroup>

              {/* RIGHT GROUP */}
              <FieldGroup>
                <Field>
                  <FieldLabel>Original Price</FieldLabel>
                  <Input
                    type="number"
                    step="0.01"
                    {...register("pricing.originalPrice", {
                      valueAsNumber: true,
                    })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Discount Price</FieldLabel>
                  <Input
                    type="number"
                    step="0.01"
                    {...register("pricing.discountPrice", {
                      valueAsNumber: true,
                    })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Discount %</FieldLabel>
                  <Input
                    type="number"
                    {...register("pricing.discountPercent", {
                      valueAsNumber: true,
                    })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Stock Status</FieldLabel>
                  <Input
                    placeholder="e.g. In Stock"
                    {...register("stock.status")}
                  />
                </Field>

                <Field>
                  <FieldLabel>Stock Quantity</FieldLabel>
                  <Input
                    type="number"
                    placeholder="e.g. 20"
                    {...register("stock.quantity", { valueAsNumber: true })}
                  />
                </Field>

                <Field>
                  <FieldLabel>Time left</FieldLabel>
                  <Input
                    placeholder="e.g. 2h 45m left"
                    {...register("timeLeft")}
                  />
                </Field>

                <Field>
                  <FieldLabel>Care Instructions (comma separated)</FieldLabel>
                  <Input
                    placeholder="e.g. Avoid sunlight, Water weekly"
                    {...register("careInstructions")}
                  />
                </Field>

                <Field>
                  <FieldLabel>Features (comma separated)</FieldLabel>
                  <Input
                    placeholder="e.g. Care Guide Included, Free Delivery"
                    {...register("features")}
                  />
                </Field>
              </FieldGroup>
            </div>

            <Field className="mt-4 flex justify-end gap-2">
              <Button
                className="cursor-pointer"
                type="submit"
                disabled={loading || isSubmitting}
              >
                {loading ? "Updating..." : "Update Product"}
              </Button>
            </Field>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProduct;
