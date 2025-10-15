import { instance } from "@/lib/instance";
import { ParamsType } from "../types/types";

export const getProducts = async (params: ParamsType) => {
  const { limit = 10, skip = 0, categoryValue = "" } = params;
  try {
    const response = await instance.get(
      `/products?limit=${limit}&skip=${skip}&category=${categoryValue}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const getCategoryList = async () => {
  try {
    const response = await instance.get("/products/category-list");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};

export const addProduct = async (product: any) => {
  try {
    const response = await instance.post("/products/add", product);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product");
  }
};

export const editProduct = async (id: any, product: any) => {
  try {
    const response = await instance.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit product");
  }
};

export const deleteProduct = async (id: any) => {
  try {
    const response = await instance.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete product");
  }
};
