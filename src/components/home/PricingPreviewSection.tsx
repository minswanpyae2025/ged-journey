
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Learner",
    price: "20,000",
    period: "per month",
    description: "Essential resources for GED preparation",
    features: [
      "Access to articles & videos",
      "Basic study materials",
      "Subject overviews",
      "Email support"
    ],
    cta: "Get Started",
    variant: "outline",
    badge: null
  },
  {
    name: "Smart Learner",
    price: "30,000",
    period: "per month",
    description: "Enhanced learning with progress tracking",
    features: [
      "Everything in Basic Learner",
      "Interactive quizzes",
      "Progress tracking",
      "Personalized study plan",
      "Priority email support"
    ],
    cta: "Get Started",
    variant: "default",
    badge: "Most Popular"
  },
  {
    name: "Guided Genius",
    price: "40,000",
    period: "per month",
    description: "Premium experience with AI assistance",
    features: [
      "Everything in Smart Learner",
      "AI Assistant access",
      "5 AI questions daily",
      "Advanced analytics",
      "Premium study materials",
      "24/7 priority support"
    ],
    cta: "Get Started",
    variant: "outline",
    badge: null
  }
];

export default function PricingPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select a plan that fits your learning needs and budget. All plans include our core GED preparation materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative rounded-xl border bg-white shadow-lg flex flex-col">
              {plan.badge && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
                  <span className="bg-ged-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-ged-green mr-2 shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <Link to="/pricing" className="w-full">
                  <Button 
                    variant={plan.variant as any} 
                    className={`w-full ${plan.variant === 'default' ? 'bg-ged-blue hover:bg-ged-blue/90' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/pricing">
            <Button variant="link" className="text-ged-blue gap-1">
              View Full Pricing Details <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
