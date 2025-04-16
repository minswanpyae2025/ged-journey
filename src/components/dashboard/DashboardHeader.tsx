
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  userName: string;
  userSubscription: 'Basic Learner' | 'Smart Learner' | 'Guided Genius';
}

export default function DashboardHeader({ toggleSidebar, userName, userSubscription }: DashboardHeaderProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notifications] = useState([
    { id: 1, message: "Your subscription renews in 7 days" },
    { id: 2, message: "New Science module content added" },
    { id: 3, message: "You earned a 7-day bonus from a referral!" }
  ]);

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('gedAuth');
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      duration: 3000,
    });
    
    // Redirect to home page
    navigate('/');
  };

  const badgeColor = 
    userSubscription === 'Basic Learner' ? 'bg-gray-200 text-gray-800' :
    userSubscription === 'Smart Learner' ? 'bg-ged-lightblue text-ged-blue' :
    'bg-ged-lightpurple text-ged-purple';
  
  return (
    <header className="sticky top-0 z-20 w-full bg-background border-b">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button onClick={toggleSidebar} variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg hidden md:inline-block">Dashboard</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                {notifications.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-ged-purple rounded-full"></span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-2 font-medium border-b">Notifications</div>
              {notifications.length > 0 ? (
                <div className="max-h-80 overflow-auto">
                  {notifications.map(notification => (
                    <DropdownMenuItem key={notification.id} className="py-3 cursor-pointer">
                      {notification.message}
                    </DropdownMenuItem>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No new notifications
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-between p-2 border-b">
                <div>
                  <p className="font-medium">{userName}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${badgeColor}`}>
                    {userSubscription}
                  </span>
                </div>
              </div>
              <DropdownMenuItem asChild>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
