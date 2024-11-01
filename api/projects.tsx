import { AxiosError } from "axios";
import instance from "./instance";
import { Project } from "@/types/project.d";

export async function getProjects() {
  try {
    console.log("Fetching projects...");
    const res = await instance.get("/api/projects");
    console.log("API Response:", res.data);
    const data = res.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      const errorMessage = error.message || "An error occurred";
      console.log("project erre", errorMessage);
    }
    throw error;
  }
}

export const getProjectById = async ({ id }: { id: string }) => {
  const res = await instance.get("/api/projects");
  const dataById = res.data.find((x: Project) => x.id === id);

  console.log(dataById);

  return dataById;
};
