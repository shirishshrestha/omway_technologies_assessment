"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useGetProducts } from "@/features/products";

ChartJS.register(ArcElement, Tooltip, Legend);

const StockChart = () => {
  const params = {
    skip: 0,
    limit: 0,
  };
  const { data: products } = useGetProducts(params);

  const lowStockItems = products?.products.filter(
    (p: any) => p.stock < 50
  ).length;
  const highStockItems = products?.products.filter(
    (p: any) => p.stock >= 50
  ).length;
  const data = {
    labels: ["Low Stock (<50)", "High Stock (≥50)"],
    datasets: [
      {
        label: "Stock Items",
        data: [lowStockItems, highStockItems],
        backgroundColor: ["#ff7391", "#4fd8d8"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
          font: {
            size: 12,
            weight: "600",
          },
        },
      },
      title: {
        display: true,
        text: "Product Stock Overview",
        color: "#e5e7eb",
        font: {
          size: 16,
          weight: "600",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-card p-8 rounded-xl">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default StockChart;
