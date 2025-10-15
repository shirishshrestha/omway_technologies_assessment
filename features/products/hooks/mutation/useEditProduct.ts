import { useMutation } from "@tanstack/react-query";
import { editProduct } from "../../api/ProductsApiSlice";
import { toast } from "sonner";

export const useEditProduct = (onOpenChange, id) => {
  return useMutation({
    mutationFn: (product) => editProduct(id, product),
    onSuccess: () => {
      toast.success("Product edited successfully!");
      setTimeout(() => {
        onOpenChange(false);
      }, 1000);
    },
  });
};
