import { DashboardHeader, RecentProducts, StatsCards } from "@/features";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <DashboardHeader />
        <StatsCards />
        <div className="grid gap-6 xl:grid-cols-2">
          {/* <ProductsChart /> */}
          <RecentProducts />
        </div>
      </div>
    </div>
  );
}
