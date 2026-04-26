import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
  totalPages: number;
}

export default function Pagination({
  page,
  setPage,
  hasNextPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <Button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        variant="outline"
      >
        ← Prev
      </Button>

      <span className="font-medium">
        Page {page} of {totalPages}
      </span>

      <Button
        disabled={!hasNextPage}
        onClick={() => setPage((p) => p + 1)}
        variant="outline"
      >
        Next →
      </Button>
    </div>
  );
}
