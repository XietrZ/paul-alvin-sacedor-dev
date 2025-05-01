
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Navigation sections
  const navSections = [
    "about",
    "skills",
    "experience",
    "projects",
    "publications",
    "contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">Portfolio</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navSections.map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="capitalize"
              >
                {section}
              </Button>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 py-4">
                  {navSections.map((section) => (
                    <Button
                      key={section}
                      variant="ghost"
                      onClick={() => {
                        scrollToSection(section);
                        // Close the sheet by simulating Escape key press
                        document.dispatchEvent(
                          new KeyboardEvent("keydown", { key: "Escape" })
                        );
                      }}
                      className="capitalize justify-start"
                    >
                      {section}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
