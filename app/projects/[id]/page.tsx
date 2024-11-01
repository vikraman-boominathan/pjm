"use client";

import { use, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Loader from "@/app/components/Loader";
import projectStore from "@/app/stores/ProjectStore";
import { ProjectProps } from "@/types/project.d";

const ProjectPage = observer(({ params }: ProjectProps) => {
  
  const {id} = use(params); 

  useEffect(() => {
    projectStore.fetchProjectById(id);
  }, [id]);

  if (projectStore.isLoading) return <Loader />;

  return (
    <div>
      {projectStore.currentProject ? (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {projectStore.currentProject.name}
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {projectStore.currentProject.description}
            </p>
          </div>
        </main>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
});

export default ProjectPage;
