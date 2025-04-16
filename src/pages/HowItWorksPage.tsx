
import PageHeader from '@/components/PageHeader';
import { CheckCircle, Mail, MessageSquare, CreditCard, UserCheck, UserPlus } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Plan",
      description: "Browse our different subscription tiers and select the one that best fits your learning needs.",
      icon: <CheckCircle className="h-10 w-10 text-ged-blue" />
    },
    {
      id: 2,
      title: "Make Payment",
      description: "Use the QR code on our pricing page to make your payment securely and conveniently.",
      icon: <CreditCard className="h-10 w-10 text-ged-blue" />
    },
    {
      id: 3,
      title: "Contact Us",
      description: "Send us the payment screenshot via Telegram or email to verify your payment.",
      icon: <MessageSquare className="h-10 w-10 text-ged-blue" />
    },
    {
      id: 4,
      title: "Manual Verification",
      description: "Our team will manually verify your payment for 100% security and authenticity.",
      icon: <UserCheck className="h-10 w-10 text-ged-blue" />
    },
    {
      id: 5,
      title: "Account Creation",
      description: "We'll create your account with access to the features included in your selected plan.",
      icon: <UserPlus className="h-10 w-10 text-ged-blue" />
    },
    {
      id: 6,
      title: "Receive Credentials",
      description: "We'll send your login credentials via your preferred contact method.",
      icon: <Mail className="h-10 w-10 text-ged-blue" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container-content">
          <PageHeader 
            title="How It Works" 
            description="Follow these simple steps to get started with GED Journey and begin your learning experience."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Steps */}
              <div className="ml-8 md:ml-12 border-l-2 border-ged-blue pl-8 md:pl-12 space-y-12 mb-12">
                {steps.map((step) => (
                  <div key={step.id} className="relative">
                    {/* Step Number Bubble */}
                    <div className="absolute -left-14 md:-left-18 -mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-ged-blue text-white font-bold">
                      {step.id}
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                      <div className="mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="bg-ged-lightgreen p-6 rounded-xl border border-ged-green/30 shadow-lg mt-12">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-ged-green/20 p-3 rounded-full">
                    <UserCheck className="h-6 w-6 text-ged-green" />
                  </div>
                  <h3 className="text-xl font-semibold">100% Manual Verification</h3>
                </div>
                <p className="text-center md:text-right text-muted-foreground">
                  We personally review every account for your security and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
