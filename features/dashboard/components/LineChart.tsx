"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetProducts } from "@/features/products";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function StockLineChart() {
  const params = {
    skip: 0,
    limit: 10,
  };
  const { data: products } = useGetProducts(params);

  console.log(products?.products);

  const data = {
    labels: products?.products.map((p) => p.brand),
    datasets: [
      {
        label: "Price",
        data: products?.products.map((p) => p.price),
        borderColor: "#3b82f6", // blue
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
      },
      {
        label: "Discounted Price",
        data: products?.products.map(
          (p) => p.price * (1 - p.discountPercentage / 100)
        ),
        borderColor: "#facc15", // yellow
        backgroundColor: "rgba(250,204,21,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#e5e7eb" } },
    },
    scales: {
      x: { ticks: { color: "#e5e7eb" } },
      y: { ticks: { color: "#e5e7eb" } },
    },
  };
  return (
    <div className="bg-card p-8 rounded-xl">
      <h2 className="text-xl font-semibold text-center mb-4">
        Product Pricing Overview
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}
