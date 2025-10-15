import { useQuery } from "@tanstack/react-query";
import { recentProducts } from "../../api/DashboardApiSlice";

export const useGetRecentProducts = () => {
  return useQuery({
    queryKey: ["recent-products"],
    queryFn: () => recentProducts(),
  });
};
