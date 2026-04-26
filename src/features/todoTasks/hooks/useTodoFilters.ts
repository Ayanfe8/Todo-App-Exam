import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import type { TaskStatus } from "@/types";

/**
 * Manage pagination, search, and status filter state for a todo list UI.
 *
 * Returns an object containing current filter state and setter functions:
 * - `page` and `setPage`: current page number and updater
 * - `search` and `setSearch`: current raw search text and updater
 * - `debouncedSearch`: `search` value debounced by 500ms
 * - `statusFilter` and `setStatusFilter`: current task status filter (`TaskStatus` or `"all"`) and updater
 *
 * @returns An object with the current filter state and corresponding setter functions
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
