
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number; // 0-100
  color: string;
}

interface ModuleCardProps {
  module: ModuleType;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link 
      to={`/dashboard/modules/${module.id}`}
      className="bg-white rounded-xl border shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className={`h-2 ${module.color}`} />
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${module.color.replace('bg-', 'bg-').replace('/', '/20')}`}>
            {module.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{module.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
