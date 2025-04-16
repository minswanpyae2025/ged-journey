
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, User, KeyRound, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Define a union type for subscriptions
type SubscriptionType = 'Basic Learner' | 'Smart Learner' | 'Guided Genius';

export default function SettingsPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Mock user data (would come from auth context in a real app)
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    subscription: 'Smart Learner' as SubscriptionType,
    expiryDate: '2025-05-15'
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password validation
    if (newPassword !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Please ensure the new password and confirmation match."
      });
      return;
    }
    
    if (newPassword.length < 8) {
      toast({
        variant: "destructive",
        title: "Password too short",
        description: "Your password must be at least 8 characters long."
      });
      return;
    }
    
    // In a real app, this would call an API to change the password
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully."
    });
    
    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
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
  
  // Render plan badge based on subscription
  const getSubscriptionBadge = () => {
    const badgeClass = 
      userData.subscription === 'Basic Learner' ? 'bg-gray-200 text-gray-800' :
      userData.subscription === 'Smart Learner' ? 'bg-ged-lightblue text-ged-blue' :
      'bg-ged-lightpurple text-ged-purple';
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${badgeClass}`}>
        {userData.subscription}
      </span>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6 text-ged-blue" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>View your account details and subscription</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
              <p>{userData.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
              <p>{userData.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Subscription Plan</h3>
              <div className="flex items-center gap-2 mt-1">
                {getSubscriptionBadge()}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Expiry Date</h3>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{formatDate(userData.expiryDate)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <KeyRound className="h-5 w-5" />
              Change Password
            </CardTitle>
            <CardDescription>Update your account password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium">
                  Current Password
                </label>
                <input
                  id="current-password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ged-blue"
                />
              </div>
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium">
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ged-blue"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium">
                  Confirm New Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ged-blue"
                />
              </div>
              <Button type="submit" className="w-full bg-ged-blue hover:bg-ged-blue/90">
                Update Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
