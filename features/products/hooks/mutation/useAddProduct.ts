import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../api/ProductsApiSlice";
import { toast } from "sonner";

export const useAddProduct = (onOpenChange: any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product) => addProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product added successfully!");
      setTimeout(() => {
        onOpenChange(false);
      }, 1000);
    },
  });
};
