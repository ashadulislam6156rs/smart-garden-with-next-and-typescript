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
import { TProducts } from "@/types/TProducts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
  } = useForm<TProducts>({
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
        const res = await fetch(`/api/events/${productId}`);
        if (!res.ok) throw new Error("Failed to fetch event");
        const data: TProducts = await res.json();
        console.log(data);
        // Prefill the form with fetched data
        reset({
          title: data.title,
          image: data.image,
          id: data.id,
        });
      } catch (error) {
        console.error("Failed to fetch event", error);
      }
    };

    fetchEvent();
  }, [productId, open, reset]);

  const onSubmit = async (data: Partial<TProducts>) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Update failed");

      onUpdated();
      onClose(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update event");
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

        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
