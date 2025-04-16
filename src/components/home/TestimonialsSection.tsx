
import { User } from 'lucide-react';

const testimonials = [
  {
    quote: "GED Journey made studying for my GED so much easier. The AI assistant helped me understand difficult math concepts that I was struggling with for years.",
    name: "Sarah Johnson",
    role: "GED Graduate",
    image: null
  },
  {
    quote: "As a working parent, I needed flexibility. The self-paced modules let me study whenever I had free time, and I passed all subjects on my first try!",
    name: "Michael Rodriguez",
    role: "GED Student",
    image: null
  },
  {
    quote: "The practice quizzes were almost identical to the actual GED test. I felt so prepared walking into the testing center, and it paid off!",
    name: "Aisha Williams",
    role: "Recent GED Graduate",
    image: null
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-ged-lightblue">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students who transformed their education journey with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border flex flex-col">
              <div className="flex-1">
                <div className="mb-4 text-ged-purple">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="italic mb-6 text-foreground/90">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center mt-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full mr-4 bg-ged-lightpurple flex items-center justify-center">
                    <User className="text-ged-purple" />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
