
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led development of microservices architecture, mentored junior developers",
      languages: ["Java", "React JS", "TypeScript", "Python"]
    },
    {
      role: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client applications using React and Node.js",
      languages: ["React JS", "Node.js", "JavaScript", "MySQL"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions",
      period: "2017 - 2019",
      description: "Built responsive web applications and implemented UI/UX designs",
      languages: ["React JS", "JavaScript", "CSS", "Redux"]
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <ScrollArea className="h-[600px]">
          <div className="space-y-6 pr-4">
            {experiences.map((exp) => (
              <Card key={exp.role} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <div className="text-xl">{exp.role}</div>
                      <div className="text-muted-foreground">{exp.company}</div>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
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
