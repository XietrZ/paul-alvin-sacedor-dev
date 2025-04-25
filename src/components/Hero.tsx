
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
          Full Stack Developer
        </h1>
        <p className="text-xl text-muted-foreground mb-8 fade-in">
          I craft robust and scalable applications with modern technologies.
          Passionate about creating elegant solutions to complex problems.
        </p>
        <div className="flex justify-center gap-4 fade-in">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
