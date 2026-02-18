import axiosInstance from "./axios";


export async function getTodos(
  page = 1,
  limit = 10,
  search = "",
  status = "all",
) {
  const response = await axiosInstance.get("/tasks", {
    params: {
      page,
      limit,
      search: search || undefined,
      status: status !== "all" ? status : undefined,
    },
  });
  return response.data;
}

export async function getTodo(id) {
  const response = await axiosInstance.get(`/tasks/${id}`);
  return response.data;
}

export async function createTodo(data) {
  const response = await axiosInstance.post("/tasks", data);
  return response.data;
}

export async function updateTodo(id, data) {
  const response = await axiosInstance.patch(`/tasks/${id}`, data);
  return response.data;
}

export async function deleteTodo(id) {
  const response = await axiosInstance.delete(`/tasks/${id}`);
  return response.data;
}
