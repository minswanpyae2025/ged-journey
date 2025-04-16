
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-ged-lightpurple to-white">
      <div className="container-content text-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ged-blue to-ged-purple">
          Your Path to GED Success Starts Here
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Interactive modules, expert content, and AI-powered assistance to help you achieve your GED certification with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/pricing">
            <Button size="lg" className="gap-2 bg-ged-blue hover:bg-ged-blue/90">
              Get Started <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button variant="outline" size="lg">
              Learn How It Works
            </Button>
          </Link>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-2xl border">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
              alt="Student using GED Journey platform" 
              className="w-full h-auto object-cover" 
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-lg border">
            <p className="text-sm font-medium text-ged-purple">Trusted by thousands of students</p>
          </div>
        </div>
      </div>
    </section>
  );
}
