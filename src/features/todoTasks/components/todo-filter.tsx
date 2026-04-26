import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TaskStatus } from "@/types";

interface TodoFilterProps {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: TaskStatus | "all";
  setStatusFilter: (value: TaskStatus | "all") => void;
}

/**
 * Renders search and status controls for filtering todo tasks.
 *
 * @param statusFilter - Current task status filter; use `"all"` to show every task
 * @param setStatusFilter - Callback invoked with a new status value when the status selection changes
 * @param search - Current text search query
 * @param setSearch - Callback invoked with the updated search string when the input changes
 * @returns The filter UI containing a text search input and a status dropdown
 */
export default function TodoFilter({
  statusFilter,
  setStatusFilter,
  search,
  setSearch,
}: TodoFilterProps) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded-md w-full"
        aria-label="Search tasks"
      />

       <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="DONE">Done</SelectItem>
          <SelectItem value="TODO">TODO</SelectItem>
          <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
          <SelectItem value="CANCELLED">Cancelled</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
