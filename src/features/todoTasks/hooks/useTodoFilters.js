import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export function useTodoFilters() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const debouncedSearch = useDebounce(search);

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
