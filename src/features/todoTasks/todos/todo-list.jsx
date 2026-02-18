import TodoCard from "./todo-card";

export default function TodoList({
  todos,
  onEdit,
  onDelete,
  onNavigate,
}) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
}
