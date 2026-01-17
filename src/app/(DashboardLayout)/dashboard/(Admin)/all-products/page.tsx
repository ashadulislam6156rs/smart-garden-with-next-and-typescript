"use client";

import { DeleteProductModal } from "@/components/modals/DeleteProductModal";
import { UpdateProductModal } from "@/components/modals/UpdateProductModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TProducts } from "@/types/TProducts";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllProducts() {

  const [products, setProducts] = useState<TProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUpdateProductId, setSelectedUpdateProductId] = useState<
    string | null
  >(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedDeleteProductId, setSelectedDeleteProductId] = useState<
    string | null
  >(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res?.data);
    } catch (error) {
      console.error("Failed to fetch Products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>All Products</CardTitle>
            <CardDescription>
              Manage and view all created Products
            </CardDescription>
          </div>

          <Link href="/dashboard/create-product">
            <Button>Create Product</Button>
          </Link>
        </CardHeader>

        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading Products...</p>
          ) : products.length === 0 ? (
            <p className="text-sm text-muted-foreground">No Products found.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.title}
                    </TableCell>
                    {/* <TableCell>{product?.date}</TableCell>
                    <TableCell>{product?.location}</TableCell> */}
                    <TableCell className="truncate max-w-50">
                      {product.image}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedUpdateProductId(product.id!);
                          setModalOpen(true);
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setSelectedDeleteProductId(product.id!);
                          setDeleteOpen(true);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <UpdateProductModal
        productId={selectedUpdateProductId || ""}
        open={modalOpen}
        onClose={setModalOpen}
        onUpdated={fetchProducts}
      />

      <DeleteProductModal
        productId={selectedDeleteProductId || ""}
        open={deleteOpen}
        onClose={setDeleteOpen}
        onDeleted={fetchProducts}
      />
    </main>
  );
}
