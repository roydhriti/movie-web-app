import type { Movie } from "../types/movie";
import { axiosClient } from "./axiosClient";

export const movieApi = {
  getAll: (): Promise<Movie[]> =>
    axiosClient.get("/movies").then((res) => res.data),

  getById: (id: number): Promise<Movie> =>
    axiosClient.get(`/movies/${id}`).then((res) => res.data),

  create: (movie: Omit<Movie, "id">): Promise<Movie> =>
    axiosClient.post("/movies", movie).then((res) => res.data),

  // Update an existing movie
  update: (id: number, movie: Partial<Omit<Movie, "id">> | Movie): Promise<Movie> =>
    axiosClient.put(`/movies/${id}`, movie).then((res) => res.data),

  // Delete a movie
  delete: (id: number): Promise<void> =>
    axiosClient.delete(`/movies/${id}`).then(() => {}),
};
