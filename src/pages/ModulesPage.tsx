
import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ModulesPage() {
  const { moduleId } = useParams();
  
  // Mock data for modules
  const modules = {
    math: {
      title: "Mathematics",
      description: "Algebra, geometry, and data analysis",
      videos: [
        { id: 1, title: "Algebra Basics", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: 2, title: "Geometry Fundamentals", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
      ],
      articles: [
        { id: 1, title: "Understanding Algebraic Expressions", content: "Algebraic expressions are combinations of variables, numbers, and operations. They are used to represent real-world situations mathematically..." },
        { id: 2, title: "Solving Linear Equations", content: "Linear equations are equations with variables that have a power of 1. To solve them, we isolate the variable on one side..." }
      ],
      quizzes: [
        {
          id: 1,
          title: "Algebra Quiz",
          questions: [
            {
              id: 1,
              question: "What is the value of x in the equation 2x + 5 = 15?",
              options: ["5", "7", "10", "12"],
              answer: 0
            },
            {
              id: 2,
              question: "Which expression is equivalent to 3(x + 2)?",
              options: ["3x + 2", "3x + 6", "3x + 5", "3x + 8"],
              answer: 1
            }
          ]
        }
      ]
    },
    language: {
      title: "Reading & Language Arts",
      description: "Reading comprehension and writing skills",
      videos: [
        { id: 1, title: "Reading Comprehension Strategies", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
      ],
      articles: [
        { id: 1, title: "Effective Reading Strategies", content: "Reading comprehension is the ability to process text, understand its meaning, and integrate it with what you already know..." },
        { id: 2, title: "Writing Clear Arguments", content: "An effective argument has a clear thesis statement, supporting evidence, and a logical structure..." }
      ],
      quizzes: [
        {
          id: 1,
          title: "Reading Comprehension Quiz",
          questions: [
            {
              id: 1,
              question: "What is the main purpose of a thesis statement?",
              options: ["To summarize the entire essay", "To present the main argument", "To introduce a topic", "To conclude an essay"],
              answer: 1
            }
          ]
        }
      ]
    }
  };
  
  // Default to math if no moduleId or invalid moduleId
  const currentModule = moduleId && modules[moduleId] ? modules[moduleId] : modules.math;
  
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
          {currentModule.videos.map(video => (
            <Card key={video.id}>
              <CardHeader>
                <CardTitle>{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full rounded-md"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="articles" className="mt-6 space-y-4">
          {currentModule.articles.map(article => (
            <Card key={article.id}>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{article.content}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="quizzes" className="mt-6 space-y-4">
          {currentModule.quizzes.map(quiz => (
            <Card key={quiz.id}>
              <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>Test your knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quiz.questions.map((question, idx) => (
                    <div key={question.id} className="space-y-2">
                      <h3 className="font-medium">Question {idx + 1}: {question.question}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {question.options.map((option, optionIdx) => (
                          <div key={optionIdx} className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id={`q${question.id}-opt${optionIdx}`} 
                              name={`question-${question.id}`} 
                              className="h-4 w-4 border-gray-300 text-ged-blue focus:ring-ged-blue"
                            />
                            <label htmlFor={`q${question.id}-opt${optionIdx}`}>{option}</label>
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
