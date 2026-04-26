import TodoCard from "./todo-card";
import type { Todo } from "@/types";

interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onNavigate: (id: string) => void;
}

/**
 * Renders an unordered list of todos as TodoCard components.
 *
 * @param todos - Array of todo items to display; each item is rendered as a TodoCard keyed by `id`.
 * @param onEdit - Callback invoked with a todo when its edit action is triggered.
 * @param onNavigate - Callback invoked with a todo `id` to navigate to that todo's details.
 * @returns A React element containing an unordered list of TodoCard components for the provided `todos`.
 */
export default function TodoList({ todos, onEdit, onNavigate }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
}