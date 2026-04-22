declare global {
  interface ImportMeta {
    env: {
      VITE_API_URL: string;
    };
  }
}

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      // window.location.href = "/login";
      console.log("Unauthorized, 401 detected");
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
