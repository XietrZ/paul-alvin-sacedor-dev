
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experiencesData } from "./constants/ExperienceData";
import LanguageFilter from "./LanguageFilter";

const Experience = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  
  // Get all unique languages from experience data
  const allLanguages = useMemo(() => {
    const languagesSet = new Set<string>();
    experiencesData.forEach((exp) => {
      exp.languages.forEach((lang) => languagesSet.add(lang));
    });
    return Array.from(languagesSet);
  }, []);
  
  // Filter experiences based on selected languages
  const filteredExperiences = useMemo(() => {
    if (selectedLanguages.length === 0) return experiencesData;
    
    return experiencesData.filter((exp) => 
      exp.languages.some(lang => selectedLanguages.includes(lang))
    );
  }, [selectedLanguages]);

  return (
    <section id="experience" className="section-padding ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>
        
        <LanguageFilter 
          languages={allLanguages} 
          onFilterChange={setSelectedLanguages} 
        />
        
        <ScrollArea className="h-[600px]">
          <div className="space-y-6">
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((exp) => (
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
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-muted-foreground mb-4">{desc}</li>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.languages.map((lang) => (
                        <Badge 
                          key={lang} 
                          variant={selectedLanguages.includes(lang) ? "default" : "secondary"}
                        >
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-muted-foreground">No experiences match the selected filters.</p>
            )}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Experience;
