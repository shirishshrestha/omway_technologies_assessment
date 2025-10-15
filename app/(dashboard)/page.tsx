import {
  DashboardHeader,
  RecentProducts,
  StatsCards,
  StockChart,
  StockLineChart,
} from "@/features";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <DashboardHeader />
        <StatsCards />
        <StockLineChart />
        <div className="grid gap-6 xl:grid-cols-2">
          <StockChart />
          <RecentProducts />
        </div>
      </div>
    </div>
  );
}
