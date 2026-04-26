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

/**
 * Fetches a paginated list of todos from the /tasks endpoint.
 *
 * @param search - Text to filter todos by; when an empty string is provided it is omitted from the request query
 * @param status - Task status to filter by; use `"all"` to omit the status filter from the request
 * @returns A paginated response containing `Todo` items and pagination metadata
 */
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

/**
 * Retrieve a single todo by its ID.
 *
 * @returns The todo item matching the provided `id`
 */
export async function getTodo(id: string): Promise<Todo> {
  const response = await axiosInstance.get<Todo>(`/tasks/${id}`);
  return response.data;
}

/**
 * Create a new todo task using the provided payload.
 *
 * @param data - Payload describing the todo to create (required `name`; optional `status` and `completed`)
 * @returns The created `Todo` object returned by the server
 */
export async function createTodo(data: CreateTodoData): Promise<Todo> {
  const response = await axiosInstance.post<Todo>("/tasks", data);
  return response.data;
}

/**
 * Updates an existing todo by its ID.
 *
 * @param id - The ID of the todo to update
 * @param data - Partial todo fields to apply to the existing todo
 * @returns The updated `Todo` object
 */
export async function updateTodo(id: string, data: UpdateTodoData): Promise<Todo> {
  const response = await axiosInstance.patch<Todo>(`/tasks/${id}`, data);
  return response.data;
}

/**
 * Deletes the todo task with the given identifier.
 *
 * @param id - The task's unique identifier
 */
export async function deleteTodo(id: string): Promise<void> {
  await axiosInstance.delete(`/tasks/${id}`);
}