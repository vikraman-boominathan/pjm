import authStore from "@/app/stores/AuthStore";
import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

const instance = axios.create({
  baseURL: BASE_URL,
  headers:  {
    "Content-Type": "application/json",
  },
})

instance.interceptors.request.use((config) => {
  const token = authStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    ; 
  }
  return config;
}, (error) => {
    console.log("error", error)
  return Promise.reject(error);
});

export default instance;