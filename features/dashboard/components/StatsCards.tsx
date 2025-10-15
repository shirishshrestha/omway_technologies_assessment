"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useGetCategoryList, useGetProducts } from "@/features/products";
import { Package, ShoppingCart, DollarSign, Star } from "lucide-react";

export function StatsCards() {
  const params = {
    skip: 0,
    limit: 0,
  };
  const { data: products } = useGetProducts(params);
  const { data: categories } = useGetCategoryList();
  const totalValue = products?.products.reduce(
    (sum: number, p: any) => sum + p.price * p.stock,
    0
  );

  const avgRating =
    products?.products.reduce((sum: number, p: any) => sum + p.rating, 0) /
    products?.products.length;

  const stats = [
    {
      title: "Total Products",
      value: products ? products.total : "0",
      icon: Package,
      trend: "up",
    },
    {
      title: "Total Product Categories",
      value: categories ? categories.length : "0",
      change: "+8%",
      icon: ShoppingCart,
      trend: "up",
    },
    {
      title: "Inventory Value",
      value: totalValue ? `$${totalValue.toLocaleString("en-US")}` : "$0.00",
      change: "+23%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Average Rating",
      value: avgRating ? avgRating.toFixed(1) : "0.0",
      change: "+2.1%",
      icon: Star,
      trend: "up",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
