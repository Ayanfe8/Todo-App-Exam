import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import type { TaskStatus } from "@/types";

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
