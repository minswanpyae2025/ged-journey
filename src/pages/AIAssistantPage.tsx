
import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function AIAssistantPage() {
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your GED learning assistant. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock user data (would come from auth context in a real app)
  const userData = {
    subscription: 'Guided Genius' as const, // or 'Basic Learner' or 'Smart Learner'
    dailyQuestionsUsed: 3,
    dailyQuestionsLimit: 5
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Check if user has reached their daily limit
    if (userData.dailyQuestionsUsed >= userData.dailyQuestionsLimit) {
      toast({
        variant: "destructive",
        title: "Daily limit reached",
        description: "You've used all 5 of your daily AI questions. Please try again tomorrow.",
      });
      return;
    }
    
    // Add user message to chat
    setMessages([...messages, { role: 'user', content: message }]);
    setIsLoading(true);
    
    // Mock API response (with timeout to simulate network request)
    setTimeout(() => {
      // In a real app, this would be an API call to your AI service
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I understand you're asking about "${message}". The GED exam covers this topic in the ${
          message.toLowerCase().includes('math') ? 'Mathematical Reasoning' :
          message.toLowerCase().includes('science') ? 'Science' :
          message.toLowerCase().includes('history') || message.toLowerCase().includes('social') ? 'Social Studies' :
          'Reasoning Through Language Arts'
        } section. Would you like me to explain more about this concept?`
      }]);
      setIsLoading(false);
      setMessage('');
      
      // In a real app, increment the daily questions used counter in the database
    }, 1500);
  };
  
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="h-6 w-6 text-ged-purple" />
        <div>
          <h1 className="text-2xl font-bold">AI Learning Assistant</h1>
          <p className="text-muted-foreground">Ask any question about GED topics</p>
        </div>
      </div>
      
      <Card className="flex-1 flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle>Conversation</CardTitle>
          <CardDescription>
            You've used {userData.dailyQuestionsUsed} of {userData.dailyQuestionsLimit} daily questions
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground ml-12'
                      : 'bg-muted mr-12'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-2 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question about GED topics..."
              className="flex-1 px-3 py-2 text-sm bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ged-purple"
            />
            <Button onClick={handleSendMessage} className="bg-ged-purple hover:bg-ged-purple/90">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
