"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";

import { useState } from "react";

interface DeleteProductModalProps {
  productId: string;
  open: boolean;
  onClose: (open: boolean) => void;
  onDeleted: () => void;
}

export function DeleteProductModal({
  productId,
  open,
  onClose,
  onDeleted,
}: DeleteProductModalProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!productId) return;

    

    setLoading(true);
    try {
      const res = await axios.delete(`/api/products/${productId}`);

      if (!res) {
        throw new Error("Failed to delete product");
      }
     alert("Product deleted successfully!");
      onDeleted();
      onClose(false);
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-destructive">Delete Product</DialogTitle>
        </DialogHeader>

        <div className="text-sm text-muted-foreground">
          Are you sure you want to delete this product? This action{" "}
          <strong>cannot be undone</strong>.
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onClose(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Product"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
