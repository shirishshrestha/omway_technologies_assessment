import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/ProductsApiSlice";
import { ParamsType } from "../../types/types";

export const useGetProducts = (params: ParamsType) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
};
