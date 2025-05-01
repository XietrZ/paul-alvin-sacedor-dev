import { useState, useMemo } from "react";
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
import { Button } from "@/components/ui/button";
import LanguageFilter from "./LanguageFilter";

const Projects = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Get all unique languages from projects data
  const allLanguages = useMemo(() => {
    const languagesSet = new Set<string>();
    projectConstants.forEach((project) => {
      project.tech.forEach((tech) => languagesSet.add(tech));
    });
    return Array.from(languagesSet);
  }, []);

  // Filter projects based on selected languages
  const filteredProjects = useMemo(() => {
    if (selectedLanguages.length === 0) return projectConstants;

    return projectConstants.filter((project) =>
      project.tech.some((tech) => selectedLanguages.includes(tech))
    );
  }, [selectedLanguages]);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <LanguageFilter
          languages={allLanguages}
          onFilterChange={setSelectedLanguages}
        />

        <ScrollArea className="h-[500px] md:h-[600px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Dialog key={project.title}>
                  <DialogTrigger asChild>
                    <Card className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
                      <div className="relative w-full max-h-[400px] overflow-hidden rounded-lg">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-contain w-full h-full"
                            loading="lazy"
                          />
                        </AspectRatio>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          {project.title}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
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
                            <Badge
                              key={tech}
                              variant={
                                selectedLanguages.includes(tech)
                                  ? "default"
                                  : "outline"
                              }
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center justify-between">
                        {project.title}
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" /> View on GitHub
                          </a>
                        </Button>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>
                      <Carousel className="w-full max-h-[500px]">
                        <CarouselContent>
                          {project.screenshots.map((screenshot, index) => (
                            <CarouselItem
                              key={index}
                              className="flex justify-center"
                            >
                              <div className="relative w-full max-h-[400px] overflow-hidden rounded-lg">
                                <AspectRatio ratio={16 / 9}>
                                  <img
                                    src={screenshot}
                                    alt={`${project.title} screenshot ${
                                      index + 1
                                    }`}
                                    className="object-contain w-full h-full"
                                    loading="lazy"
                                  />
                                </AspectRatio>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="absolute inset-y-1/2 left-1 -translate-y-1/2 z-10">
                          <CarouselPrevious className="bg-background/80" />
                        </div>
                        <div className="absolute inset-y-1/2 right-1 -translate-y-1/2 z-10">
                          <CarouselNext className="bg-background/80" />
                        </div>
                      </Carousel>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant={
                              selectedLanguages.includes(tech)
                                ? "default"
                                : "outline"
                            }
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">
                  No projects match the selected filters.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Projects;
