import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../api/ProductsApiSlice";
import { toast } from "sonner";

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      toast.success("Product deleted successfully!");
    },
  });
};
