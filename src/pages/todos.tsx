import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "@/features/todoTasks/todos/todo-form";
import TodoList from "@/features/todoTasks/todos/todo-list";
import Pagination from "@/features/todoTasks/components/pagination";
import TodoFilter from "@/features/todoTasks/components/todo-filter";
import {
  useTodos,
  useCreateTodo,
  useUpdateTodo,
} from "@/features/todoTasks/hooks/usehooks";
import { useTodoFilters } from "@/features/todoTasks/hooks/useTodoFilters";
import ErrorState from "@/components/errorstate";
import type { Todo, TaskStatus } from "@/types";
import type { TodoFormData } from "@/features/todoTasks/todos/todo-schema";

/**
 * Renders the Tasks page with a creation form, search and status filters, a paginated todo list, and an in-place edit modal.
 *
 * @returns The JSX element for the Todos page.
 */
export default function Todos() {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const createMutation = useCreateTodo();
  const updateMutation = useUpdateTodo();
  const navigate = useNavigate();

  const {
    page,
    setPage,
    search,
    setSearch,
    debouncedSearch,
    statusFilter,
    setStatusFilter,
  } = useTodoFilters();

  const { data, isLoading, isError, error, refetch } = useTodos(
    page,
    10,
    debouncedSearch,
    statusFilter
  );

  const todos = data?.data ?? [];

  const handleSubmit = async (data: TodoFormData, id?: string): Promise<void> => {
    if (id) {
      await updateMutation.mutateAsync({ id, data });
      return;
    }
    await createMutation.mutateAsync({ ...data, status: "TODO" });
  };

  if (isLoading) return <p className="p-6">Loading...</p>;

  if (isError)
    return (
      <ErrorState
        message={(error as Error)?.message ?? "Failed to load todos"}
        retry={refetch}
      />
    );

  return (
    <section className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tasks</h1>

      <TodoForm onSubmitTodo={handleSubmit} />

      <TodoFilter
        search={search}
        setSearch={(value: string) => {
          setPage(1);
          setSearch(value);
        }}
        statusFilter={statusFilter}
        setStatusFilter={(value: TaskStatus | "all") => {
          setPage(1);
          setStatusFilter(value);
        }}
      />

      <TodoList
        todos={todos}
        onEdit={(todo) => setSelectedTodo(todo)}
        onNavigate={(id) => navigate(`/todos/${id}`)}
      />

      <Pagination
        page={page}
        hasNextPage={data?.meta?.hasNextPage ?? false}
        totalPages={data?.meta?.totalPages ?? 1}
        setPage={setPage}
      />

      {selectedTodo && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">Edit Task</h2>

            <TodoForm
              initialData={selectedTodo}
              onSubmitTodo={async (data, id) => {
                if (id) {
                  await updateMutation.mutateAsync({ id, data });
                  setSelectedTodo(null);
                }
              }}
            />

            <button
              onClick={() => setSelectedTodo(null)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}