"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TProductDetails } from "@/types/TProductDetails";
// import { TProducts } from "@/types/TProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { toast } from "react-toastify";

interface EditProductModalProps {
  productId: string;
  open: boolean;
  onClose: (open: boolean) => void;
  onUpdated: () => void;
}

export function UpdateProductModal({
  productId,
  open,
  onClose,
  onUpdated,
}: EditProductModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TProductDetails>({
    defaultValues: {
      title: "",
      image: "",
      id: productId,
    },
  });

  const [loading, setLoading] = useState(false);

  // Fetch event data when modal opens
  useEffect(() => {
    if (!open || !productId) return;

    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/products/${productId}`);
        if (!res) toast.error("Failed to fetch product");
        const data: TProductDetails = await res?.data;
        // Prefill the form with fetched data
        reset({
          title: data.title,
          image: data.image,
          id: data.id,
        });
      } catch (error) {
        toast.error("Failed to fetch event");
      }
    };

    fetchEvent();
  }, [productId, open, reset]);

  const onSubmit = async (data: Partial<TProductDetails>) => {
    setLoading(true);
    try {
      const res = await axios.patch(`/api/products/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res) toast.success("update product successfull");

      onUpdated();
      onClose(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg z-99">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input {...register("title", { required: true })} />
            </Field>

            <Field>
              <FieldLabel>Image URL</FieldLabel>
              <Input {...register("image", { required: true })} />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onClose(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading || isSubmitting}>
              {loading ? "Updating..." : "Update Product"}
            </Button>
          </DialogFooter>
        </form> */}

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
                <Input {...register("image", { required: true })} type="file" />
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

          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onClose(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading || isSubmitting}>
              {loading ? "Updating..." : "Update Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
