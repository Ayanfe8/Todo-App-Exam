import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "@/api/tasks";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useTodos = (page, limit, search, status) => {
  return useQuery({
    queryKey: ["todos", page, limit, search, status],
    queryFn: () => getTodos(page, limit, search, status),
    keepPreviousData: true,
  });
};


export const useTodo = (id) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
    enabled: !!id,
  });
};
