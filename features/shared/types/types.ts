interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  delay?: number; // debounce delay in ms
}

export type { SearchInputProps };

export interface ProductsType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  availabilityStatus: string;
  thumbnail: string;
  images: string[];
}
