import Card from "./components/Card";
export default function Dashboard() {
  const projects = [
    {
      id: 1,
      projectName: "Portfolio Website",
      projectDescription: "A personal portfolio website to showcase projects and skills.",
    },
    {
      id: 2,
      projectName: "E-commerce Platform",
      projectDescription: "A full-featured e-commerce application with shopping cart and payment integration.",
    },
    {
      id: 3,
      projectName: "Task Management App",
      projectDescription: "A web app to manage daily tasks with features like reminders and priorities.",
    },
    {
      id: 4,
      projectName: "Social Media Dashboard",
      projectDescription: "An analytics dashboard to track social media metrics across multiple platforms.",
    },
    {
      id: 5,
      projectName: "Weather App",
      projectDescription: "A weather forecast app that provides real-time weather updates based on location.",
    },
  ];
  
  const projectList = projects.map(project => (
    <Card key={project.id} {...project}/>
  ))
  
  return (
    <div className="grid grid-cols-3 gap-4">
      
      {projectList}

    </div>
  );
}
