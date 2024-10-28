import { Project } from "@/types/project.d";

export default function Card({name, description }: Project) {
  return (
    <div>
      <div className="flex flex-col bg-slate-200 border min-h-52 shadow-sm rounded-xl">
        <div className="p-4 md:p-10">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
