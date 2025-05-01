
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

type LanguageFilterProps = {
  languages: string[];
  onFilterChange: (selectedLanguages: string[]) => void;
};

const LanguageFilter = ({ languages, onFilterChange }: LanguageFilterProps) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const isMobile = useIsMobile();

  // Sort languages alphabetically
  const sortedLanguages = [...languages].sort((a, b) => a.localeCompare(b));

  const handleValueChange = (value: string[]) => {
    setSelectedLanguages(value);
    onFilterChange(value);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-sm font-medium">Filter by language:</h3>
        {selectedLanguages.length > 0 && (
          <Badge
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleValueChange([])}
          >
            Clear filters
          </Badge>
        )}
      </div>
      <div className="pb-2">
        <ToggleGroup 
          type="multiple" 
          value={selectedLanguages} 
          onValueChange={handleValueChange}
          className="flex flex-wrap gap-2"
        >
          {sortedLanguages.map((lang) => (
            <ToggleGroupItem 
              key={lang} 
              value={lang} 
              aria-label={`Filter by ${lang}`}
              className="text-xs md:text-sm"
            >
              {lang}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default LanguageFilter;
