interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
  totalPages: number;
}

export default function Pagination({ page, setPage, hasNextPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        className="px-4 py-2 border text-blue-600 rounded disabled:opacity-50"
      >
        ← Prev
      </button>

      <span className="font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={!hasNextPage}
        onClick={() => setPage((p) => p + 1)}
        className="px-4 py-2 border text-blue-600 rounded disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
}
