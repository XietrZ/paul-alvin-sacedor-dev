
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led development of microservices architecture, mentored junior developers",
    },
    {
      role: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client applications using React and Node.js",
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions",
      period: "2017 - 2019",
      description: "Built responsive web applications and implemented UI/UX designs",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-6">
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
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
