"use client";

import { useState } from "react";
import { Package, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pagination, SearchInput } from "@/features/shared";
import {
  AddProductModal,
  EditProductModal,
  useGetProducts,
} from "@/features/products";
import { ProductsType } from "@/features/shared/types/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";
import { useGetCategoryList } from "@/features/products/hooks/query/useGetCategory";
import { useDeleteProduct } from "@/features/products/hooks/mutation/useDeleteProduct";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
  availabilityStatus: string;
};

export default function ProductsPage() {
  const router = useRouter();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const searchParams = useSearchParams();

  const skip = Number.parseInt(searchParams.get("skip") || "0", 10) || 0;
  const page = skip / 10 + 1;
  const categoryValue = searchParams.get("category") || "";

  const handlePageChange = (newSkip: number) => {
    router.push(`?skip=${newSkip}`);
  };

  const handleCategoryFilter = (value: string) => {
    const query = value ? `&category=${value}` : "";
    router.push(`?skip=0${query}`);
  };

  const productParams = { limit: 10, skip, categoryValue };

  const { data: allProducts } = useGetProducts(productParams);

  const { data: categoryList } = useGetCategoryList();

  const deleteProduct = useDeleteProduct();

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct.mutate(id);
    }
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground mt-1">
              Manage your product inventory
            </p>
          </div>
          <Button className="gap-2" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className=" px-0 py-6">
          <CardContent className=" flex flex-col md:flex-row gap-4 w-full">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <SearchInput />
              </div>
            </div>
            <Select onValueChange={handleCategoryFilter} value={categoryValue}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categoryList?.map((category: string) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="flex w-full justify-center">
          <Card className="p-0 w-fit md:w-full">
            <CardContent className="p-0 overflow-x-scroll max-w-[320px] md:max-w-[100%] md:overflow-x-auto">
              <Table className="overflow-x-scroll">
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allProducts?.products.map((product: ProductsType) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={product.thumbnail || "/placeholder.svg"}
                            alt={product.title}
                            className="h-10 w-10 rounded object-cover"
                          />
                          <span className="font-medium">{product.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="capitalize">
                        {product.category}
                      </TableCell>
                      <TableCell className="font-semibold">
                        ${product.price.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          <span>{product.stock}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.availabilityStatus === "In Stock"
                              ? "default"
                              : product.availabilityStatus === "Low Stock"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {product.availabilityStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditModal(product)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <Pagination
              currentPage={page}
              totalProducts={allProducts?.total || 0}
              limit={10}
              skip={skip}
              onPageChange={handlePageChange}
            />
          </Card>
        </div>
        <Toaster position="bottom-right" richColors />
      </div>

      <AddProductModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />
      {editingProduct && (
        <EditProductModal
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          product={editingProduct}
        />
      )}
    </div>
  );
}
