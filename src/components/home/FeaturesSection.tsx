
import { Book, CheckCircle, Award, BookOpen, LightbulbIcon, Brain } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-ged-blue" />,
      title: 'Comprehensive Modules',
      description: 'Our curriculum covers all GED subjects with in-depth content designed by education experts.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-ged-blue" />,
      title: 'Practice Tests',
      description: 'Take practice quizzes that simulate the real GED test to prepare effectively and track your progress.'
    },
    {
      icon: <Brain className="h-10 w-10 text-ged-blue" />,
      title: 'AI Learning Assistant',
      description: 'Get personalized help with our AI tutor that answers your questions and explains difficult concepts.'
    },
    {
      icon: <Book className="h-10 w-10 text-ged-blue" />,
      title: 'Study Materials',
      description: 'Access videos, articles, and interactive exercises to enhance your understanding of each subject.'
    },
    {
      icon: <LightbulbIcon className="h-10 w-10 text-ged-blue" />,
      title: 'Personalized Learning',
      description: 'Our system adapts to your learning style and pace to create a customized study plan.'
    },
    {
      icon: <Award className="h-10 w-10 text-ged-blue" />,
      title: 'Success Tracking',
      description: 'Monitor your progress across all subjects with detailed analytics and achievement badges.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GED Journey?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform offers everything you need to prepare for and pass your GED exam with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border hover-scale card-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
