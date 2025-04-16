
import { AlertCircle, Calendar } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface WelcomePanelProps {
  userName: string;
  userSubscription: 'Basic Learner' | 'Smart Learner' | 'Guided Genius';
  expiryDate: string;
  bonusDays: number;
}

export default function WelcomePanel({ userName, userSubscription, expiryDate, bonusDays }: WelcomePanelProps) {
  const expiryDateObj = new Date(expiryDate);
  const currentDate = new Date();
  
  // Calculate days until expiry
  const diffTime = expiryDateObj.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const formattedExpiryDate = expiryDateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Generate the appropriate badge color based on subscription
  const badgeColor = 
    userSubscription === 'Basic Learner' ? 'bg-gray-200 text-gray-800' :
    userSubscription === 'Smart Learner' ? 'bg-ged-lightblue text-ged-blue' :
    'bg-ged-lightpurple text-ged-purple';
  
  return (
    <div className="bg-white rounded-xl border shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">Welcome back, {userName}!</h1>
            <div className="flex items-center gap-2">
              <span className={`text-sm px-2 py-1 rounded-full ${badgeColor}`}>
                {userSubscription}
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Expires: {formattedExpiryDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notifications */}
      <div className="px-6 pb-6 space-y-3">
        {diffDays <= 7 && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your subscription expires in {diffDays} day{diffDays === 1 ? '' : 's'}. Please renew soon to avoid interruption.
            </AlertDescription>
          </Alert>
        )}
        
        {bonusDays > 0 && (
          <Alert className="bg-ged-lightgreen border-ged-green/30">
            <AlertDescription className="text-ged-green">
              Congratulations! You've earned {bonusDays} bonus day{bonusDays === 1 ? '' : 's'} from your referrals. 
              These days have been added to your subscription.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
