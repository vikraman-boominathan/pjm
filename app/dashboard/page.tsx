"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import projectStore from "../stores/ProjectStore";
import CustomCard from "../components/CustomCard";
import Loader from "../components/Loader";
import Link from "next/link";
import { notFound } from "next/navigation";

const Dashboard = observer(() => {
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching projects in Dashboard component...");
      await projectStore.fetchProjects();
      console.log("Projects after fetch:", projectStore.projects); 
      if (!projectStore.projects.length && !projectStore.isLoading) {
        notFound();
      }
    };

    fetchData();
  }, [projectStore.fetchProjects]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {projectStore.isLoading ? (
        <Loader />
      ) : projectStore.projects.length === 0 ? (
        <div className="flex justify-center items-center w-full col-span-3">
          No projects found.
        </div>
      ) : (
        projectStore.projects.map((project) => (
          <Link href={`projects/${project.id}`} key={project.id}>
            <CustomCard {...project} />
          </Link>
        ))
      )}
    </div>
  );
});

export default Dashboard;
