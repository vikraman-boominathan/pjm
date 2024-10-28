"use client";

import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import { getProjects } from "@/api/projects";
import { Project } from "@/types/project.d";

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProjects();

        setProjects(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Projects state updated:", projects);
  }, [projects]);

  const projectList = projects.map((project) => (
    <CustomCard key={project.id} {...project} />
  ));

  return <div className="grid grid-cols-3 gap-4">{projectList}</div>;
}
