
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating login in a real app this would connect to a backend
    setTimeout(() => {
      // Demo login - only for testing purposes
      if (loginData.email === 'demo@example.com' && loginData.password === 'password') {
        toast({
          title: "Login Successful",
          description: "Welcome to GED Journey!",
          duration: 3000,
        });
        
        // Store fake auth token
        localStorage.setItem('gedAuth', 'demo-token');
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          duration: 3000,
        });
      }
      
      setLoading(false);
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Sign In to GED Journey</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    onClick={toggleShowPassword}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button 
                type="submit" 
                className="w-full bg-ged-blue hover:bg-ged-blue/90"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Don't have an account? Please see our{' '}
                  <a 
                    href="/pricing" 
                    className="text-ged-blue hover:underline"
                  >
                    pricing page
                  </a>
                  {' '}for sign-up instructions.
                </p>
              </div>
            </CardFooter>
          </form>
        </Card>
        
        <div className="mt-6 p-4 bg-ged-lightblue rounded-lg border border-ged-blue/20">
          <div className="flex items-start gap-3">
            <LockKeyhole className="text-ged-blue shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-semibold text-ged-blue">Demo Access:</span> Use email "demo@example.com" and password "password" to preview the dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
