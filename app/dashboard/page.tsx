"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import CustomCard from "../components/CustomCard";
import { getProjects } from "@/api/projects";
import { Project } from "@/types/project.d";

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProjects();

        if (Array.isArray(res)) {
          setProjects(res);
        } else if (res && res.status === 404) {
          notFound();
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading ? (
        <Loader />
      ) : projects.length === 0 ? (
        <div className="flex justify-center items-center w-full col-span-3">
          No projects found.
        </div>
      ) : (
        projects.map((project) => <CustomCard key={project.id} {...project} />)
      )}
    </div>
  );
}

function Loader() {
  return (
    <div className="relative flex w-64 animate-pulse gap-2 p-4">
      <div className="h-12 w-12 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
        <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
      <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
    </div>
  );
}


