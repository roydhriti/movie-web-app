import { axiosClient } from "./axiosClient";

export const userApi = {
  register: (data: { name: string; email: string; password: string }) =>
    axiosClient.post("/users", data).then((res) => res.data),

  login: (data: { email: string; password: string }) =>
    axiosClient.post("/users/login", data).then((res) => res.data),

  getAll: () => axiosClient.get("/users").then((res) => res.data),

  getById: (id: number) =>
    axiosClient.get(`/users/${id}`).then((res) => res.data),
};
