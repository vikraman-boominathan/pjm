import { CardProps } from "../types/card.d";


export default function Card({key, projectName, projectDescription}: CardProps) {
  return (
    <div>
      <div className="flex flex-col bg-slate-200 border min-h-52 shadow-sm rounded-xl">
        <div className="p-4 md:p-10">
          <h3 className="text-lg font-bold">
           {projectName}
          </h3>
          <p className="mt-2">
            {projectDescription}
          </p>
          
        </div>
      </div>
    </div>
  );
}
