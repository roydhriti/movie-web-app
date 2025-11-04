import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3001", // your backend base URL
  headers: { "Content-Type": "application/json" },
});
