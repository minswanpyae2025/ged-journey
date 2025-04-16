
import { useState } from 'react';
import { Users, Copy, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function ReferralsPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Mock referral data
  const referralCode = "ALEXJ7921";
  const referralLink = `https://gedjourney.com/signup?ref=${referralCode}`;
  
  // Mock referral history
  const referrals = [
    { id: 1, name: "Sarah Smith", date: "2025-03-15", status: "7-day bonus granted" },
    { id: 2, name: "John Davis", date: "2025-03-22", status: "7-day bonus granted" },
    { id: 3, name: "Maria Rodriguez", date: "2025-04-05", status: "Pending payment" }
  ];
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Referral link has been copied to your clipboard."
      });
      
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="h-6 w-6 text-ged-blue" />
        <h1 className="text-2xl font-bold">Referrals</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
          <CardDescription>
            Share this link with friends. When they subscribe, you'll receive a 7-day extension to your subscription.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 px-3 py-2 bg-muted rounded-md font-mono text-sm truncate">
              {referralLink}
            </div>
            <Button 
              onClick={copyToClipboard}
              className="bg-ged-blue hover:bg-ged-blue/90 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Link</span>
                </>
              )}
            </Button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Your referral code: <span className="font-semibold">{referralCode}</span>
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Referral History</CardTitle>
          <CardDescription>
            Track your referrals and rewards
          </CardDescription>
        </CardHeader>
        <CardContent>
          {referrals.length > 0 ? (
            <div className="rounded-md border">
              <table className="min-w-full divide-y">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {referrals.map((referral) => (
                    <tr key={referral.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{referral.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{formatDate(referral.date)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          referral.status === "7-day bonus granted" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {referral.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>You haven't referred anyone yet.</p>
              <p className="mt-2">Share your referral link to start earning bonuses!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
