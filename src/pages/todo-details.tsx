import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getTodo, deleteTodo } from "@/api/tasks";
import ErrorState from "@/components/errorstate";
import ConfirmDialog from "@/components/confirmdialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2, Edit } from "lucide-react";
import TodoForm from "@/features/todoTasks/todos/todo-form";
import { useUpdateTodo } from "@/features/todoTasks/hooks/usehooks";
import type { TodoFormData } from "@/features/todoTasks/todos/todo-schema";

/**
 * Render the todo details page for the current route `id`.
 *
 * Displays a todo's details, supports toggling into an edit form, and allows deleting the todo with confirmation.
 * Shows a loading state while fetching, an error state with retry on failure, and a "not found" message if the todo is missing.
 *
 * @returns The JSX element for the todo details view.
 */
export default function TodoDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const updateMutation = useUpdateTodo();

  const [isEditing, setIsEditing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    data: todo,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id!),
    enabled: !!id,
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTodo(id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      navigate("/todos");
    },
  });

  if (isLoading) return <p className="p-6 text-sm">Loading...</p>;

  if (isError)
    return <ErrorState message={(error as Error).message} retry={refetch} />;

  if (!todo) return <p className="p-6 text-gray-500">Todo not found.</p>;

  const handleSubmit = async (data: TodoFormData, editId?: string): Promise<void> => {
    if (editId) {
      await updateMutation.mutateAsync({ id: editId, data });
      setIsEditing(false);
      await refetch();
    }
  };

  return (
    <main className="p-6 space-y-6">
      <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> Back
      </Button>

      {isEditing ? (
        <TodoForm initialData={todo} onSubmitTodo={handleSubmit} />
      ) : (
        <>
          <div className="border rounded p-4 space-y-4">
            <h1 className="text-2xl font-semibold">{todo.name}</h1>

            <p>
              Status:{" "}
              <span
                className={
                  todo.completed
                    ? "text-green-600 font-medium"
                    : "text-orange-600 font-medium"
                }
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </p>

            {todo.description && <p>Description: {todo.description}</p>}

            {todo.createdAt && (
              <p className="text-sm text-gray-500">
                Created: {new Date(todo.createdAt).toLocaleString()}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <Button size="sm" onClick={() => setIsEditing(true)}>
              <Edit size={16} /> Edit
            </Button>

            <Button
              variant="destructive"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setShowConfirm(true);
              }}
            >
              <Trash2 size={16} /> Delete
            </Button>
          </div>
        </>
      )}

      <ConfirmDialog
        open={showConfirm}
        title="Delete Todo"
        description="Are you sure you want to delete this todo? This cannot be undone."
        onCancel={() => setShowConfirm(false)}
        onConfirm={() => deleteMutation.mutate()}
      />
    </main>
  );
}
