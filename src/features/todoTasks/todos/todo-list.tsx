import TodoCard from "./todo-card";
import type { Todo } from "@/types";

interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onNavigate: (id: string) => void;
}

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