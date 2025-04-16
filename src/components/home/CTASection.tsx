
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ged-blue to-ged-purple text-white">
      <div className="container-content text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your GED Journey?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Join thousands of successful students who have achieved their GED certification with our platform.
        </p>
        <Link to="/pricing">
          <Button size="lg" variant="secondary" className="gap-2">
            Start Learning Today <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
