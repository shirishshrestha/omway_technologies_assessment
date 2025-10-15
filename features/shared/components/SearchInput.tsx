"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { debounce } from "../utils/debounce";
import { SearchInputProps } from "../types/types";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = ({
  placeholder = "Search...",
  delay = 700,
}: Omit<SearchInputProps, "onSearch">) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [input, setInput] = useState(searchParams.get("search") || "");

  // Update URL params with debounce
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (!query) {
          params.delete("search");
        } else {
          params.set("search", query);
        }

        // Reset page to 1 when search changes
        params.set("page", "1");

        router.push(`/products?${params.toString()}`);
      }, delay),
    [searchParams, router, delay]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  const handleSubmit = () => {
    debouncedSearch(input); // immediate search on button click
  };

  return (
    <div className="flex-1 flex gap-2">
      <Input
        placeholder={placeholder}
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="flex-1"
      />
      <Button onClick={handleSubmit} size="icon">
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SearchInput;
