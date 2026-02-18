import { Pencil, Trash2 } from "lucide-react"
import { useDeleteTodo } from "@/features/todoTasks/hooks/usehooks";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function TodoCard({
  todo,
  onEdit,
  onNavigate,
}) {
  const deleteMutation = useDeleteTodo();

  return (
    <li
      onClick={() => onNavigate(todo.id)}
      className="border rounded p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
    >
      <div>
        <p className="font-medium">{todo.name}</p>
        <p className="text-sm text-gray-500">
          Status:
          <span
            className={
              todo.status === "DONE"
                ? "text-green-600"
                : "text-yellow-600"
            }
          >
            {todo.status}
          </span>
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(todo);
          }}
          className="text-blue-400 hover:text-blue-300 transition-colors"
          title="Edit Todo"
        >
          <Pencil size={20} />
        </button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="text-red-400 hover:text-red-300 transition-colors"
              title="Delete Todo"
            >
              <Trash2 size={20} />
            </button>
          </AlertDialogTrigger>
          
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to delete this?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-700"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteMutation.mutate(todo.id);
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </li>
  );
}


