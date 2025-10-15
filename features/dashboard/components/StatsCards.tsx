import { Card, CardContent } from "@/components/ui/card";
import { Package, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "248",
    change: "+12%",
    icon: Package,
    trend: "up",
  },
  {
    title: "Active Listings",
    value: "189",
    change: "+8%",
    icon: ShoppingCart,
    trend: "up",
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+23%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Growth Rate",
    value: "12.5%",
    change: "+2.1%",
    icon: TrendingUp,
    trend: "up",
  },
];

export function StatsCards() {
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
