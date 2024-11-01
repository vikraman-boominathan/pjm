export interface Project{
  id: string;
  name: string;
  description: string;
}

export interface ProjectProps {
  params: Promise<{ id: string }>;
}