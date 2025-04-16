
import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useModules } from '@/hooks/useModules';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

type VideoContent = {
  url: string;
};

type ArticleContent = {
  content: string;
};

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer?: number;
};

type QuizContent = {
  questions: QuizQuestion[];
};

export default function ModulesPage() {
  const { moduleId } = useParams();
  const { data: modules, isLoading, error } = useModules(moduleId);
  
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-full" />
        <div className="grid gap-4">
          {[1, 2, 3].map(i => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-5 w-48" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-32 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Failed to load modules. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  const currentModule = modules?.[0];

  if (!currentModule) {
    return (
      <Alert>
        <AlertDescription>
          No module content found.
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen className="h-6 w-6 text-ged-blue" />
        <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      </div>
      <p className="text-muted-foreground">{currentModule.description}</p>
      
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="mt-6 space-y-4">
          {currentModule.module_content
            .filter(content => content.type === 'video')
            .map(video => (
              <Card key={video.id}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {video.content && typeof video.content === 'object' && (
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-md"
                        src={(video.content as VideoContent).url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        
        <TabsContent value="articles" className="mt-6 space-y-4">
          {currentModule.module_content
            .filter(content => content.type === 'article')
            .map(article => (
              <Card key={article.id}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {article.content && typeof article.content === 'object' && (
                    <p>{(article.content as ArticleContent).content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        
        <TabsContent value="quizzes" className="mt-6 space-y-4">
          {currentModule.module_content
            .filter(content => content.type === 'quiz')
            .map(quiz => (
              <Card key={quiz.id}>
                <CardHeader>
                  <CardTitle>{quiz.title}</CardTitle>
                  <CardDescription>Test your knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quiz.content && typeof quiz.content === 'object' && 
                     (quiz.content as QuizContent).questions && 
                     Array.isArray((quiz.content as QuizContent).questions) && 
                     (quiz.content as QuizContent).questions.map((question, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="font-medium">Question {idx + 1}: {question.question}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {question.options.map((option, optionIdx) => (
                            <div key={optionIdx} className="flex items-center space-x-2">
                              <input 
                                type="radio" 
                                id={`q${idx}-opt${optionIdx}`} 
                                name={`question-${idx}`} 
                                className="h-4 w-4 border-gray-300 text-ged-blue focus:ring-ged-blue"
                              />
                              <label htmlFor={`q${idx}-opt${optionIdx}`}>{option}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button className="px-4 py-2 bg-ged-blue text-white rounded-md hover:bg-ged-blue/90 transition-colors">
                      Submit Quiz
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
