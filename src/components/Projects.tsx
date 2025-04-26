import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      longDescription: "Developed a comprehensive e-commerce platform featuring real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. The solution includes advanced features like order management, analytics, and customer relationship tools.",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      github: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      screenshots: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ]
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
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
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
                      <a href={project.github} className="text-muted-foreground hover:text-primary" onClick={(e) => e.stopPropagation()}>
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
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground">{project.longDescription}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <img 
                        key={index}
                        src={screenshot} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="rounded-lg w-full"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
