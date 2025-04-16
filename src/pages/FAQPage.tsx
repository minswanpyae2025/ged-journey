
import PageHeader from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqSections = [
    {
      title: "Payments",
      questions: [
        {
          question: "How do I make a payment?",
          answer: "You can make a payment by scanning the QR code on our pricing page. After payment, take a screenshot and send it to us via Telegram or email for verification."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods through our QR code payment system, including credit/debit cards and mobile payment solutions."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "We offer a 7-day money-back guarantee if you're not satisfied with our service. Please contact our support team to request a refund."
        },
        {
          question: "How secure is my payment information?",
          answer: "Your payment information is processed securely and we do not store your payment details on our servers."
        }
      ]
    },
    {
      title: "Learning Access",
      questions: [
        {
          question: "How soon can I access the platform after payment?",
          answer: "Once we've verified your payment, we'll create your account and send you the login credentials within 24 hours, but typically much faster."
        },
        {
          question: "Can I access the platform on multiple devices?",
          answer: "Yes, you can access our platform on multiple devices with the same login credentials."
        },
        {
          question: "What happens when my subscription expires?",
          answer: "When your subscription expires, you'll lose access to the platform. You'll receive notifications before expiration so you can renew if desired."
        },
        {
          question: "Can I upgrade my subscription plan?",
          answer: "Yes, you can upgrade your subscription plan at any time. Simply pay the difference and contact us with the payment confirmation."
        }
      ]
    },
    {
      title: "AI Chatbot",
      questions: [
        {
          question: "How does the AI Assistant work?",
          answer: "Our AI Assistant uses advanced language models to provide personalized help with your GED studies. It can answer questions, explain concepts, and provide study guidance."
        },
        {
          question: "Is there a limit to how many questions I can ask the AI?",
          answer: "Yes, the Guided Genius plan includes 5 AI questions per day. This limit resets at midnight in your local time zone."
        },
        {
          question: "How accurate is the AI Assistant?",
          answer: "Our AI Assistant is trained on high-quality educational content and is designed to provide accurate information. However, it's always a good idea to verify important information with your course materials."
        },
        {
          question: "Can the AI help with all GED subjects?",
          answer: "Yes, the AI Assistant can help with all GED subjects: Math, Science, Social Studies, and Language Arts."
        }
      ]
    },
    {
      title: "Referral System",
      questions: [
        {
          question: "How does the referral system work?",
          answer: "Each user gets a unique referral code. When someone signs up using your code, you'll receive a 7-day extension to your subscription as a reward."
        },
        {
          question: "How many people can I refer?",
          answer: "There's no limit to how many people you can refer. Each successful referral earns you a 7-day extension to your subscription."
        },
        {
          question: "When do I receive my referral reward?",
          answer: "Your referral reward is applied to your account once the referred person makes a payment and their account is activated."
        },
        {
          question: "Can I see who I've referred?",
          answer: "Yes, you can view all your successful referrals and their status in the Referral Panel of your dashboard."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container-content">
          <PageHeader 
            title="Frequently Asked Questions" 
            description="Find answers to common questions about our platform, payments, and learning experience."
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-muted rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="mb-4">
              If you couldn't find the answer to your question, feel free to contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="bg-ged-blue hover:bg-ged-blue/90">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Import the Button component
import { Button } from "@/components/ui/button";
