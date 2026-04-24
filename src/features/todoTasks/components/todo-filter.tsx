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
