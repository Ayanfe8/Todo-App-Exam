import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  type CreateTodoData,
  type UpdateTodoData,
} from "@/api/tasks";
import type { TaskStatus } from "@/types";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTodoData) => createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTodoData }) =>
      updateTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useTodos = (
  page: number,
  limit: number,
  search: string,
  status: TaskStatus | "all"
) => {
  return useQuery({
    queryKey: ["todos", page, limit, search, status],
    queryFn: () => getTodos(page, limit, search, status),
    placeholderData: (prev) => prev, // replaces keepPreviousData in v5
  });
};

export const useTodo = (id: string) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
    enabled: !!id,
  });
};