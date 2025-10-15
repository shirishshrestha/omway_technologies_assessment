import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  limit: number;
  onPageChange: (page: number) => void;
  skip: number;
}

const Pagination = ({
  currentPage,
  totalProducts,
  limit,
  onPageChange,
  skip,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalProducts / limit);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(skip - limit); // go back by 10
      currentPage -= 1;
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      onPageChange(skip + limit); // go forward by 10
    }
  };

  return (
    <div className="flex items-center justify-between border-t px-6 py-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="gap-1 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">{currentPage}</span>
          <span className="text-muted-foreground">of</span>
          <span className="font-medium">{totalPages}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="gap-1 bg-transparent"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
