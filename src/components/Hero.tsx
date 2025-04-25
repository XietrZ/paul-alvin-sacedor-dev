
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Avatar className="h-32 w-32 border-4 border-primary">
            <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Profile Picture" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
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
