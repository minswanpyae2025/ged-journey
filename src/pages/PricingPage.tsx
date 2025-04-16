import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Zap, BookOpen, Brain, MessageSquare, Mail } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Basic Learner",
      monthlyPrice: "20,000",
      annualPrice: "192,000",
      period: billingPeriod === 'monthly' ? "per month" : "per year",
      description: "Essential resources for GED preparation",
      icon: <BookOpen className="h-12 w-12 text-ged-blue" />,
      features: [
        "Access to articles & videos",
        "Basic study materials",
        "Subject overviews",
        "Email support"
      ],
      notIncluded: [
        "Interactive quizzes",
        "Progress tracking",
        "AI Assistant"
      ],
      qrPlaceholder: "https://via.placeholder.com/150",
      highlighted: false
    },
    {
      name: "Smart Learner",
      monthlyPrice: "30,000",
      annualPrice: "288,000",
      period: billingPeriod === 'monthly' ? "per month" : "per year",
      description: "Enhanced learning with progress tracking",
      icon: <Zap className="h-12 w-12 text-ged-purple" />,
      features: [
        "Everything in Basic Learner",
        "Interactive quizzes",
        "Progress tracking",
        "Personalized study plan",
        "Priority email support"
      ],
      notIncluded: [
        "AI Assistant"
      ],
      qrPlaceholder: "https://via.placeholder.com/150",
      highlighted: true
    },
    {
      name: "Guided Genius",
      monthlyPrice: "40,000",
      annualPrice: "384,000",
      period: billingPeriod === 'monthly' ? "per month" : "per year",
      description: "Premium experience with AI assistance",
      icon: <Brain className="h-12 w-12 text-ged-green" />,
      features: [
        "Everything in Smart Learner",
        "AI Assistant access",
        "5 AI questions daily",
        "Advanced analytics",
        "Premium study materials",
        "24/7 priority support"
      ],
      notIncluded: [],
      qrPlaceholder: "https://via.placeholder.com/150",
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container-content">
          <PageHeader 
            title="Choose Your Learning Plan" 
            description="Select the subscription that fits your learning needs. All plans include our core GED preparation materials."
          />

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white shadow text-primary' 
                    : 'text-muted-foreground hover:bg-white/50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'annual' 
                    ? 'bg-white shadow text-primary' 
                    : 'text-muted-foreground hover:bg-white/50'
                }`}
              >
                Annual
                <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl border ${plan.highlighted ? 'border-ged-purple shadow-xl ring-1 ring-ged-purple' : 'border-border shadow-lg'} bg-white overflow-hidden flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
                    <span className="bg-ged-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-6 pb-3 text-center border-b">
                  <div className="mx-auto mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-3 mb-2">
                    <span className="text-3xl font-bold">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-muted-foreground ml-1">MMK</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  {billingPeriod === 'annual' && (
                    <p className="text-sm text-green-600 font-medium">
                      {`Save ${(Number(plan.monthlyPrice.replace(',', '')) * 2.4).toLocaleString()} MMK annually`}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>
                
                <div className="p-6 flex-1">
                  <strong className="block mb-3 text-sm uppercase text-muted-foreground">Includes:</strong>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-ged-green mr-2 shrink-0 mt-1" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <strong className="block mb-3 text-sm uppercase text-muted-foreground">Not included:</strong>
                      <ul className="space-y-3 mb-6">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <span className="mr-2 shrink-0 mt-1">✗</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <div className="p-6 pt-0 border-t bg-muted/30">
                  <div className="text-center mb-4">
                    <img src={plan.qrPlaceholder} alt={`Payment QR for ${plan.name}`} className="mx-auto w-24 h-24" />
                    <p className="text-sm text-muted-foreground mt-2">Scan to pay</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MessageSquare size={16} className="text-ged-blue" />
                      <p>Contact via Telegram: <a href="#" className="text-ged-blue font-medium">@gedjourney</a></p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} className="text-ged-blue" />
                      <p>or email: <a href="mailto:support@gedjourney.com" className="text-ged-blue font-medium">support@gedjourney.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-muted rounded-xl p-6 mt-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">How to Complete Your Purchase</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-ged-blue text-white w-6 h-6 flex items-center justify-center rounded-full shrink-0">1</span>
                <p>Scan the QR code of your preferred plan to make the payment</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-ged-blue text-white w-6 h-6 flex items-center justify-center rounded-full shrink-0">2</span>
                <p>Take a screenshot of your payment confirmation</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-ged-blue text-white w-6 h-6 flex items-center justify-center rounded-full shrink-0">3</span>
                <p>Send the screenshot to our Telegram or email with your name and chosen plan</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-ged-blue text-white w-6 h-6 flex items-center justify-center rounded-full shrink-0">4</span>
                <p>We'll verify your payment and create your account manually</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-ged-blue text-white w-6 h-6 flex items-center justify-center rounded-full shrink-0">5</span>
                <p>You'll receive your login credentials via your preferred contact method</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
