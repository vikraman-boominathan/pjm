import axios, { AxiosError } from "axios";
import instance from "./instance";

export async function getProjects() {
  try {
    const res = await instance.get("api/projects");

    const data = res.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      const errorMessage = error.message || "An error Occured";
      console.log(errorMessage);
    }
    console.log(error);
  }
}
