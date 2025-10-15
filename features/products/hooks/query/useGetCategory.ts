import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "../../api/ProductsApiSlice";

export const useGetCategoryList = () => {
  return useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });
};
