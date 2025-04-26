
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Publications = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>
        <div className="grid gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-start justify-between">
                <span>Deep Learning-Based Jeepney Stop Detection System using Convolution Neural Networks</span>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://ieeexplore.ieee.org/document/8343169" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardTitle>
              <CardDescription>
                Published in IEEE Region 10 Conference (TENCON) 2017
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
