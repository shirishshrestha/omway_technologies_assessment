import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct } from "../../api/ProductsApiSlice";
import { toast } from "sonner";
import { ProductFormData } from "../../utils/productSchema";

export const useEditProduct = (
  onOpenChange: (open: boolean) => void,
  id: string | number
) => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, ProductFormData>({
    mutationFn: (product) => editProduct(id, product),
    onSuccess: () => {
      toast.success("Product edited successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setTimeout(() => {
        onOpenChange(false);
      }, 1000);
    },
  });
};
