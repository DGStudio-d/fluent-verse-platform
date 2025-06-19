
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Award, 
  Clock, 
  CheckCircle, 
  Play, 
  Star,
  BookOpen,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const StudentQuizzes = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const availableQuizzes = [
    {
      id: 1,
      title: 'Spanish Vocabulary - Beginner',
      language: 'Spanish',
      level: 'Beginner',
      questions: 15,
      duration: '20 min',
      attempts: 0,
      maxAttempts: 3,
      bestScore: null,
      difficulty: 'Easy',
      topics: ['Basic Vocabulary', 'Common Phrases', 'Numbers']
    },
    {
      id: 2,
      title: 'French Grammar Fundamentals',
      language: 'French',
      level: 'Beginner',
      questions: 20,
      duration: '25 min',
      attempts: 1,
      maxAttempts: 3,
      bestScore: 78,
      difficulty: 'Medium',
      topics: ['Articles', 'Verb Conjugation', 'Gender']
    },
    {
      id: 3,
      title: 'Spanish Past Tense Mastery',
      language: 'Spanish',
      level: 'Intermediate',
      questions: 12,
      duration: '15 min',
      attempts: 0,
      maxAttempts: 3,
      bestScore: null,
      difficulty: 'Medium',
      topics: ['Preterite', 'Imperfect', 'Past Perfect']
    }
  ];

  const completedQuizzes = [
    {
      id: 4,
      title: 'Spanish Basic Greetings',
      language: 'Spanish',
      level: 'Beginner',
      score: 85,
      maxScore: 100,
      completedAt: '2024-06-18',
      attempts: 2,
      timeSpent: '18 min'
    },
    {
      id: 5,
      title: 'French Pronunciation Quiz',
      language: 'French',
      level: 'Beginner',
      score: 92,
      maxScore: 100,
      completedAt: '2024-06-15',
      attempts: 1,
      timeSpent: '12 min'
    }
  ];

  const sampleQuiz = {
    id: 1,
    title: 'Spanish Vocabulary - Beginner',
    questions: [
      {
        id: 1,
        question: '¿Cómo se dice "Hello" en español?',
        type: 'multiple-choice',
        options: ['Adiós', 'Hola', 'Gracias', 'Por favor'],
        correctAnswer: 'Hola'
      },
      {
        id: 2,
        question: 'What does "Gracias" mean in English?',
        type: 'multiple-choice',
        options: ['Please', 'Sorry', 'Thank you', 'Goodbye'],
        correctAnswer: 'Thank you'
      },
      {
        id: 3,
        question: '¿Cuál es el color de la hierba?',
        type: 'multiple-choice',
        options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
        correctAnswer: 'Verde'
      }
    ]
  };

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer('');
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100';
      case 'advanced':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100';
      case 'hard':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (quizStarted && currentQuiz) {
    const question = sampleQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / sampleQuiz.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-0 shadow-2xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <CardTitle className="text-2xl">Spanish Vocabulary - Beginner</CardTitle>
                  <CardDescription>
                    Question {currentQuestion + 1} of {sampleQuiz.questions.length}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Progress</div>
                  <div className="text-lg font-semibold">{Math.round(progress)}%</div>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
                
                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-white transition-colors">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-lg">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => {
                    setQuizStarted(false);
                    setCurrentQuiz(null);
                  }}
                >
                  Exit Quiz
                </Button>
                
                <Button 
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {currentQuestion === sampleQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Quizzes</h1>
          <p className="text-gray-600">
            Test your knowledge and track your progress with interactive quizzes
          </p>
        </div>

        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="available" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Available ({availableQuizzes.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Completed ({completedQuizzes.length})
            </TabsTrigger>
          </TabsList>

          {/* Available Quizzes */}
          <TabsContent value="available" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableQuizzes.map((quiz) => (
                <Card key={quiz.id} className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getLevelColor(quiz.level)}>
                            {quiz.level}
                          </Badge>
                          <Badge variant="outline">{quiz.language}</Badge>
                          <Badge className={getDifficultyColor(quiz.difficulty)}>
                            {quiz.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Quiz Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center py-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="text-sm font-medium">{quiz.questions}</div>
                        <div className="text-xs text-gray-500">Questions</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div className="text-sm font-medium">{quiz.duration}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                    </div>

                    {/* Attempts & Score */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Attempts</span>
                        <span className="font-medium">{quiz.attempts}/{quiz.maxAttempts}</span>
                      </div>
                      {quiz.bestScore && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Best Score</span>
                          <span className={`font-medium ${getScoreColor(quiz.bestScore)}`}>
                            {quiz.bestScore}%
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Topics */}
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Topics covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {quiz.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform duration-200"
                      disabled={quiz.attempts >= quiz.maxAttempts}
                      onClick={() => startQuiz(quiz)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {quiz.attempts >= quiz.maxAttempts ? 'Max Attempts Reached' : 
                       quiz.attempts > 0 ? 'Retake Quiz' : 'Start Quiz'}
                    </Button>

                    {quiz.attempts >= quiz.maxAttempts && (
                      <div className="flex items-center gap-2 text-amber-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>You've reached the maximum number of attempts</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Completed Quizzes */}
          <TabsContent value="completed" className="space-y-6">
            {completedQuizzes.length > 0 ? (
              <div className="space-y-4">
                {completedQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{quiz.title}</h3>
                            <Badge className={getLevelColor(quiz.level)}>
                              {quiz.level}
                            </Badge>
                            <Badge variant="outline">{quiz.language}</Badge>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <span>Completed on {new Date(quiz.completedAt).toLocaleDateString()}</span>
                            <span>Time spent: {quiz.timeSpent}</span>
                            <span>Attempts: {quiz.attempts}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${getScoreColor(quiz.score)}`}>
                              {quiz.score}%
                            </div>
                            <div className="text-xs text-gray-500">Score</div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Review Answers
                            </Button>
                            <Button variant="outline" size="sm">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              View Stats
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No Completed Quizzes</h3>
                  <p className="text-gray-500 mb-6">
                    Take your first quiz to start tracking your progress
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Browse Available Quizzes
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentQuizzes;
