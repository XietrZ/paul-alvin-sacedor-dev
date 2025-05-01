
import { Facebook, Github, Linkedin, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const profileImages = [
    "/lovable-uploads/profile_1.PNG",
    // Add more profile image paths as needed
  ];

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); // Reset after animation
      }
    };

    // Check hash on mount and handle URL changes
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center section-padding pt-24 bg-gradient-to-b from-background to-secondary/30 ${
        animate ? "animate-fade-in" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content - Carousel of Images */}
        <div className="flex justify-center lg:justify-start animate-fade-in [animation-delay:200ms] order-2 lg:order-1">
          <Carousel className="w-[310px] sm:w-[410px] md:w-[510px]">
            <CarouselContent>
              {profileImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Avatar className="h-[300px] sm:h-[400px] md:h-[500px] w-[310px] sm:w-[410px] md:w-[510px] rounded-lg border-4 border-primary shadow-2xl transition-transform duration-300 hover:scale-105">
                      <AvatarImage
                        src={image}
                        alt={`Profile image ${index + 1}`}
                        className="object-cover"
                      />
                      <AvatarFallback>PVS</AvatarFallback>
                    </Avatar>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="relative inset-0 translate-y-0 h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Right Content - Text */}
        <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 animate-fade-in text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Paul Alvin Sacedor
          </h1>
          <div className="space-y-3 lg:space-y-4">
            <p className="text-xl sm:text-2xl text-primary/80">
              Software Engineer
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Crafting robust and scalable applications with modern
              technologies. Passionate about creating elegant solutions to
              complex problems.
            </p>
          </div>
          <div className="flex gap-4 pt-4 justify-center lg:justify-start">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href="https://github.com/XietrZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href="https://www.linkedin.com/in/paul-alvin-sacedor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href="https://www.facebook.com/paul.sacedor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a href="tel:09777396781">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a href="mailto:pasacedor@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
