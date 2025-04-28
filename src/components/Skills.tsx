import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React JS", "React Native", "JavaScript", "CSS", "Redux"],
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "PHP",
        "Python",
        "MySQL",
        "MySQLite",
        "Firebase",
        "HTML",
      ],
    },
    {
      title: "Platforms & CMS",
      skills: ["SAP Hybris", "Native Android", "Wordpress"],
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "Agile"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
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

export default Skills;
