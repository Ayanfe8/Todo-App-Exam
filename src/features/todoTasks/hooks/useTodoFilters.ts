import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import type { TaskStatus } from "@/types";

/**
 * Centralizes pagination, free-text search, and status filter state for a todo list UI.
 *
 * @returns An object with the current `page`, `search`, `debouncedSearch`, and `statusFilter` values and their corresponding setter functions (`setPage`, `setSearch`, `setStatusFilter`).
 */
export function useTodoFilters() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");

  const debouncedSearch = useDebounce(search, 500);

  return {
    page,
    setPage,
    search,
    setSearch,
    debouncedSearch,
    statusFilter,
    setStatusFilter,
  };
}
