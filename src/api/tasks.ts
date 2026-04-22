import axiosInstance from "./axios";
import type { Todo, PaginatedResponse, TaskStatus } from "@/types";

export interface CreateTodoData {
  name: string;
  status?: TaskStatus;
  completed?: boolean;
}

export interface UpdateTodoData {
  name?: string;
  status?: TaskStatus;
  completed?: boolean;
}

export async function getTodos(
  page = 1,
  limit = 10,
  search = "",
  status: TaskStatus | "all" = "all"
): Promise<PaginatedResponse<Todo>> {
  const response = await axiosInstance.get<PaginatedResponse<Todo>>("/tasks", {
    params: {
      page,
      limit,
      search: search || undefined,
      status: status !== "all" ? status : undefined,
    },
  });
  return response.data;
}

export async function getTodo(id: string): Promise<Todo> {
  const response = await axiosInstance.get<Todo>(`/tasks/${id}`);
  return response.data;
}

export async function createTodo(data: CreateTodoData): Promise<Todo> {
  const response = await axiosInstance.post<Todo>("/tasks", data);
  return response.data;
}

export async function updateTodo(id: string, data: UpdateTodoData): Promise<Todo> {
  const response = await axiosInstance.patch<Todo>(`/tasks/${id}`, data);
  return response.data;
}

export async function deleteTodo(id: string): Promise<void> {
  await axiosInstance.delete(`/tasks/${id}`);
}