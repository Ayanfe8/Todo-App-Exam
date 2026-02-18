import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema } from "./todo-schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TodoForm({ initialData = null, onSubmitTodo }) {
  const isEditMode = !!initialData;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: "",
      completed: false,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name || "",
        completed: initialData.completed || false,
      });
    }
  }, [initialData, reset]);

  async function onSubmit(data,) {
    try{
      await onSubmitTodo(data, initialData?.id);
      reset();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border rounded p-4"
    >
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("completed")} />
        <Label>Completed</Label>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : isEditMode ? "Update Todo" : "Add Todo"}
      </Button>
    </form>
  );
}
