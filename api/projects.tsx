import { AxiosError } from "axios";
import instance from "./instance";

export async function getProjects() {
  const token = localStorage.getItem("token");
  try {
    
    const res = await instance.get("api/projects", {
      headers: { Authorization: `Bearer ${token}` },
    });
    

    const data = res.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      const errorMessage = error.message || "An error occurred";
      console.log(errorMessage);
    }
    console.log(error);
  }
}
