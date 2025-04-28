import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone, Facebook } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    try {
      // Create a simple email structure
      const emailContent = `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `;
      
      // Using mailto as a fallback method for direct email
      const mailtoLink = `mailto:pasacedor@gmail.com?subject=${encodeURIComponent(
        `${name} - Contact Form`
      )}&body=${encodeURIComponent(emailContent)}`;
      
      window.location.href = mailtoLink;
      
      // Clear the form
      e.currentTarget.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email sending error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Cell",
      value: "09777396781",
      href: "tel:09777396781"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "pasacedor@gmail.com",
      href: "mailto:pasacedor@gmail.com"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      value: "paul.sacedor",
      href: "https://www.facebook.com/paul.sacedor/"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "paul-alvin-sacedor",
      href: "https://www.linkedin.com/in/paul-alvin-sacedor/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-fade-in hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-full">{contact.icon}</div>
                  <div>
                    <div className="font-medium">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input 
                  placeholder="Your Name" 
                  name="name" 
                  required 
                  className="transition-all focus:scale-[1.02]"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  required
                  className="transition-all focus:scale-[1.02]"
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  className="min-h-[150px] transition-all focus:scale-[1.02]"
                  required
                />
                <Button 
                  className="w-full hover:scale-[1.02] transition-transform" 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
