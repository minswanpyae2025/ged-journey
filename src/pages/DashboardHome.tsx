
import { Calculator, CalculatorIcon, BookOpen, Book, Lightbulb, BarChart3 } from 'lucide-react';
import WelcomePanel from '@/components/dashboard/WelcomePanel';
import ModuleCard, { ModuleType } from '@/components/dashboard/ModuleCard';

export default function DashboardHome() {
  // Mock user data (would come from API/context in a real app)
  const userData = {
    name: 'Alex Johnson',
    subscription: 'Smart Learner' as const,
    expiryDate: '2025-05-15',
    bonusDays: 7
  };
  
  // Mock module data
  const modules: ModuleType[] = [
    {
      id: 'math',
      title: 'Mathematics',
      description: 'Algebra, geometry, and data analysis',
      icon: <Calculator className="h-5 w-5 text-ged-blue" />,
      progress: 65,
      color: 'bg-ged-blue/80'
    },
    {
      id: 'language',
      title: 'Reading & Language Arts',
      description: 'Reading comprehension and writing skills',
      icon: <BookOpen className="h-5 w-5 text-ged-purple" />,
      progress: 42,
      color: 'bg-ged-purple/80'
    },
    {
      id: 'science',
      title: 'Science',
      description: 'Life, physical, and earth sciences',
      icon: <Lightbulb className="h-5 w-5 text-amber-500" />,
      progress: 28,
      color: 'bg-amber-500/80'
    },
    {
      id: 'social',
      title: 'Social Studies',
      description: 'Civics, US history, and economics',
      icon: <BarChart3 className="h-5 w-5 text-ged-green" />,
      progress: 15,
      color: 'bg-ged-green/80'
    }
  ];
  
  return (
    <div className="space-y-6">
      <WelcomePanel 
        userName={userData.name}
        userSubscription={userData.subscription}
        expiryDate={userData.expiryDate}
        bonusDays={userData.bonusDays}
      />
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-xl border shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <Book className="h-6 w-6 text-ged-blue" />
          <h2 className="text-xl font-bold">Quick Tips for GED Success</h2>
        </div>
        
        <ul className="space-y-3 list-disc list-inside text-muted-foreground">
          <li>Take a practice test to identify areas for improvement</li>
          <li>Focus on one subject at a time to avoid feeling overwhelmed</li>
          <li>Use the interactive quizzes to reinforce your learning</li>
          <li>Schedule regular study sessions - consistency is key!</li>
          <li>Review incorrect answers to understand where you went wrong</li>
        </ul>
      </div>
    </div>
  );
}
