
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding pt-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Paul Alvin V. Sacedor
          </h1>
          <div className="space-y-4">
            <p className="text-2xl text-primary/80">Full Stack Developer</p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Crafting robust and scalable applications with modern technologies. 
              Passionate about creating elegant solutions to complex problems.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a
                href="https://github.com/XietrZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a
                href="https://www.linkedin.com/in/paul-alvin-sacedor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="tel:09777396781">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="mailto:pasacedor@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center md:justify-end animate-fade-in [animation-delay:200ms]">
          <Avatar className="h-72 w-64 rounded-lg border-4 border-primary shadow-2xl transition-transform duration-300 hover:scale-105">
            <AvatarImage
              src="/lovable-uploads/86ead56a-03b5-4979-97eb-ff9bba5b9bef.png"
              alt="Paul Alvin V. Sacedor"
              className="object-cover"
            />
            <AvatarFallback>PVS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;
