"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";
import { useGetRecentProducts } from "../hooks";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  availabilityStatus: string;
  thumbnail: string;
  images: string[];
}

export function RecentProducts() {
  const { data: recentProducts } = useGetRecentProducts();
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Recent Products</CardTitle>
        <CardDescription>
          Latest products added to your inventory
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentProducts?.products.map((product: Product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-lg border border-border/50 p-3 sm:p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:flex-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">
                    {product.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold">{product.price}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.stock} in stock
                  </p>
                </div>
                <Badge
                  variant={
                    product.availabilityStatus === "active"
                      ? "default"
                      : "secondary"
                  }
                  className="capitalize shrink-0"
                >
                  {product.availabilityStatus}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
