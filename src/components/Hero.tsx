
import { Github, Linkedin, Mail, WhatsApp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center section-padding pt-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
        <div className="mb-8 flex justify-center transform hover:scale-105 transition-transform duration-300">
          <Avatar className="h-60 w-60 border-4 border-primary shadow-2xl animate-fade-in">
            <AvatarImage
              src="/lovable-uploads/86ead56a-03b5-4979-97eb-ff9bba5b9bef.png"
              alt="Paul Alvin V. Sacedor"
            />
            <AvatarFallback>PVS</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Paul Alvin V. Sacedor
        </h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer crafting robust and scalable applications with
          modern technologies. Passionate about creating elegant solutions to
          complex problems.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in">
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
            <a href="https://wa.me/639777396781" target="_blank" rel="noopener noreferrer">
              <WhatsApp className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="mailto:pasacedor@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
