import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projectConstants } from "./constants/ProjectData";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = projectConstants;
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <ScrollArea className="h-[400px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4">
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
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
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
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.screenshots.map((screenshot, index) => (
                          <CarouselItem key={index}>
                            <img
                              src={screenshot}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="rounded-lg w-full"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
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
        </ScrollArea>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      </div>
    </section>
  );
};

export default Projects;
