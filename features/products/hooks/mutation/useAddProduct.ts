import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../../api/ProductsApiSlice";
import { toast } from "sonner";

export const useAddProduct = (onOpenChange) => {
  return useMutation({
    mutationFn: (product) => addProduct(product),
    onSuccess: () => {
      toast.success("Product added successfully!");
      setTimeout(() => {
        onOpenChange(false);
      }, 1000);
    },
  });
};
