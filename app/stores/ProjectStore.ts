import { makeAutoObservable, runInAction } from "mobx";
import { getProjects, getProjectById } from "@/api/projects";
import { Project } from "@/types/project.d";
import authStore from "./AuthStore";

class ProjectStore {
  projects: Project[] = [];
  currentProject: Project | null = null;

  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProjects() {
    this.isLoading = true; 
    try {
      const res = await getProjects(); 
      console.log("Response from getProjects:", res); 
  
      runInAction(() => {
        if (Array.isArray(res)) {
          this.projects = res;
        } else {
          this.projects = []; 
        }
        this.isLoading = false;
      });
    } catch (error) {
      console.log("Error fetching projects:", error); 
      runInAction(() => {
        this.isLoading = false; 
      });
    }
  }
  
  

  async fetchProjectById(id: string) {
    this.isLoading = true;
    try {
      const project = await getProjectById({ id });

      runInAction(() => {
        this.currentProject = project;
      });
    } catch (error) {
      console.error("Failed to fetch project:", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

const projectStore = new ProjectStore();
export default projectStore;
