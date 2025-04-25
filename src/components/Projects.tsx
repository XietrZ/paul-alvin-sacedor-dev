
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      github: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration",
      tech: ["React", "Python", "TensorFlow"],
      github: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  {project.title}
                  <a href={project.github} className="text-muted-foreground hover:text-primary">
                    <Github className="h-5 w-5" />
                  </a>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
