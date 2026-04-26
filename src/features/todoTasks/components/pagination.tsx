import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
  totalPages: number;
}

/**
 * Render a centered pagination control with "Prev" and "Next" buttons and current page status.
 *
 * @param page - Current 1-based page index
 * @param setPage - State setter used to update the page index
 * @param hasNextPage - Whether a next page is available
 * @param totalPages - Total number of pages
 * @returns A JSX element containing the pagination controls
 */
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
