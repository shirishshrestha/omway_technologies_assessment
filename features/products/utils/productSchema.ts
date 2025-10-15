import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .min(1, "Product name is required")
    .max(100, "Product name is too long"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce.number().min(0.01, "Price must be greater than 0"),
  stock: z.coerce.number().int().min(0, "Stock must be 0 or greater"),
  availabilityStatus: z.enum(["In Stock", "Low Stock", "Out of Stock"]),
});

export type ProductFormData = z.infer<typeof productSchema>;
