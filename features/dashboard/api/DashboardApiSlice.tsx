import { instance } from "@/lib/instance";

export const recentProducts = async () => {
  try {
    const response = await instance.get("/products?limit=5");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recent products");
  }
};
