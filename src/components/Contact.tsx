
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mailtoLink = `mailto:pasacedor@gmail.com?subject=${encodeURIComponent(formData.get('name') as string)} - Contact Form&body=${encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`)}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Fill out the form below or reach out through social media.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input placeholder="Your Name" name="name" required />
              <Input type="email" placeholder="Your Email" name="email" required />
              <Textarea placeholder="Your Message" name="message" className="min-h-[150px]" required />
              <Button className="w-full">Send Message</Button>
            </form>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
