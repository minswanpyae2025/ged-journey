
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, BookMarked, Settings, Users, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardSidebarProps {
  isOpen: boolean;
  userSubscription: 'Basic Learner' | 'Smart Learner' | 'Guided Genius';
}

export default function DashboardSidebar({ isOpen, userSubscription }: DashboardSidebarProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <Home className="h-5 w-5" />
    },
    {
      name: 'Learning Modules',
      path: '/dashboard/modules',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      name: 'AI Assistant',
      path: '/dashboard/ai-assistant',
      icon: <MessageCircle className="h-5 w-5" />,
      requiresPlan: 'Guided Genius',
      disabled: userSubscription !== 'Guided Genius'
    },
    {
      name: 'Referrals',
      path: '/dashboard/referrals',
      icon: <Users className="h-5 w-5" />
    },
    {
      name: 'Settings',
      path: '/dashboard/settings',
      icon: <Settings className="h-5 w-5" />
    }
  ];
  
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 border-r bg-muted/50 transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Link to="/dashboard" className="flex items-center gap-2">
          <BookMarked className="h-6 w-6 text-ged-purple" />
          <span className="text-xl font-semibold">GED Journey</span>
        </Link>
      </div>
      
      <div className="py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.disabled ? '#' : item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                isActive(item.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                item.disabled && "opacity-60 cursor-not-allowed hover:bg-transparent"
              )}
              onClick={(e) => {
                if (item.disabled) {
                  e.preventDefault();
                  // You could show a toast here explaining this feature is only for Guided Genius
                }
              }}
            >
              {item.icon}
              <span>{item.name}</span>
              
              {item.requiresPlan && item.disabled && (
                <span className="ml-auto text-xs bg-muted-foreground/20 text-muted-foreground px-1.5 py-0.5 rounded">
                  Locked
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <div className="bg-primary/10 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <BookMarked className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Subscription</h4>
              <p className="text-xs text-muted-foreground">
                {userSubscription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
