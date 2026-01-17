"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TProductDetails } from "@/types/TProductDetails";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const params = useParams();
  const id = params?.id as string;

  
  // const [product, setProduct] = useState<TProductDetails | null>(null);
  const [loading, setLoading] = useState(false);


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
     tags: "",
     image: "",
     gallery: "",
     pricing: {
       originalPrice: 0.0,
       discountPrice: 0.0,
       discountPercent: 0.0,
     },
     stock: {
       status: "",
       quantity: 0,
     },
     timeLeft: "",
     careInstructions: "",
     features: "",
   },
 });



   // Fetch event data when modal opens
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
           tags: data.tags,
           gallery: data.gallery,
           features: data.features,
           careInstructions: data.careInstructions || "null",

           pricing: {
             originalPrice: data.pricing?.originalPrice,
             discountPrice: data.pricing?.discountPrice,
             discountPercent: data.pricing?.discountPercent,
           },

           stock: {
             status: data.stock?.status,
             quantity: data.stock?.quantity,
           },

           timeLeft: data.timeLeft,
         });
       } catch (err) {
         console.error("Fetch failed", err);
       }
     };

     fetchProduct();
   }, [id, reset]);


  const handleUpdateProduct = async (data: TProductDetails) => {


     setLoading(true);
     try {
       const payload = {
         ...data,
       };

      const res =  await axios.patch(`/api/products/${id}`, payload);

       if(res){
         toast.success("Product updated successfully");
       }
      
     } catch (error) {
       console.error(error);
       alert("Failed to update product");
     } finally {
       setLoading(false);
     }
  };


  

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
                    type="text"
                    placeholder="Enter image URL"
                    {...register("image", { required: true })}
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
                    step="0.01"
                    type="number"
                    {...register("pricing.originalPrice", {
                      valueAsNumber: true,
                    })}
                  />
                </Field>

                {/* Discount Price */}
                <Field>
                  <FieldLabel>Discount Price</FieldLabel>
                  <Input
                    placeholder="e.g. 89"
                    step="0.01"
                    type="number"
                    {...register("pricing.discountPrice", {
                      valueAsNumber: true,
                    })}
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

            <Field className="mt-4 flex justify-end gap-2">
              <Button type="submit" disabled={loading || isSubmitting}>
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
