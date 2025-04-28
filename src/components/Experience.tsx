import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experiencesData } from "./constants/ExperienceData";

const Experience = () => {
  const experiences = experiencesData;
  return (
    <section id="experience" className="section-padding ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>
        <ScrollArea className="h-[600px]">
          <div className="space-y-6 pr-4">
            {experiences.map((exp) => (
              <Card
                key={exp.role}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <div className="text-xl">{exp.role}</div>
                      <div className="text-muted-foreground">{exp.company}</div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    {exp.description.map((desc) => (
                      <li className="text-muted-foreground mb-4">{desc}</li>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.languages.map((lang) => (
                      <Badge key={lang} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Experience;
