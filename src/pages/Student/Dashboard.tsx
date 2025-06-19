
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Users, 
  Clock, 
  Star,
  TrendingUp,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();

  const enrolledPrograms = [
    {
      id: 1,
      language: 'Spanish',
      level: 'Intermediate',
      progress: 68,
      nextLesson: 'Lesson 15: Past Tense Verbs',
      completedLessons: 14,
      totalLessons: 20,
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      language: 'French',
      level: 'Beginner',
      progress: 25,
      nextLesson: 'Lesson 6: Basic Greetings',
      completedLessons: 5,
      totalLessons: 20,
      lastAccessed: '1 day ago'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Spanish Conversation Practice',
      teacher: 'Carlos Rodriguez',
      date: 'Today',
      time: '2:00 PM',
      duration: '60 min',
      language: 'Spanish'
    },
    {
      id: 2,
      title: 'French Pronunciation Workshop',
      teacher: 'Marie Dubois',
      date: 'Tomorrow',
      time: '11:00 AM',
      duration: '45 min',
      language: 'French'
    }
  ];

  const recentQuizzes = [
    {
      id: 1,
      title: 'Spanish Vocabulary Quiz #3',
      score: 85,
      maxScore: 100,
      completed: true,
      language: 'Spanish'
    },
    {
      id: 2,
      title: 'French Grammar Basics',
      score: 78,
      maxScore: 100,
      completed: true,
      language: 'French'
    },
    {
      id: 3,
      title: 'Spanish Reading Comprehension',
      score: null,
      maxScore: 100,
      completed: false,
      language: 'Spanish'
    }
  ];

  const achievements = [
    { title: '7-Day Streak', icon: '🔥', earned: true },
    { title: 'First Quiz Completed', icon: '🎯', earned: true },
    { title: 'Live Session Attended', icon: '🎭', earned: true },
    { title: 'Level Up!', icon: '⭐', earned: false }
  ];

  const stats = [
    { label: 'Study Streak', value: '7 days', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Lessons Completed', value: '19', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Quiz Average', value: '81%', icon: Award, color: 'text-purple-600' },
    { label: 'Hours Studied', value: '24h', icon: Clock, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600">
            Ready to continue your language learning journey?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-blue-600" />
                  Continue Learning
                </CardTitle>
                <CardDescription>
                  Pick up where you left off
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledPrograms.map((program) => (
                  <div key={program.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{program.language}</h3>
                        <Badge variant="outline" className="mb-2">{program.level}</Badge>
                        <p className="text-sm text-gray-600">{program.nextLesson}</p>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Continue
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{program.progress}%</span>
                      </div>
                      <Progress value={program.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{program.completedLessons}/{program.totalLessons} lessons completed</span>
                        <span>Last accessed {program.lastAccessed}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/student/programs">
                    View All Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Upcoming Live Sessions
                </CardTitle>
                <CardDescription>
                  Don't miss your scheduled sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{session.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">with {session.teacher}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{session.date} at {session.time}</span>
                              <span>{session.duration}</span>
                              <Badge variant="outline">{session.language}</Badge>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Join Session
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/student/sessions">View All Sessions</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No upcoming sessions scheduled</p>
                    <Button asChild>
                      <Link to="/student/sessions">Browse Sessions</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Quizzes */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Recent Quizzes
                </CardTitle>
                <CardDescription>
                  Track your progress with quizzes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentQuizzes.map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          quiz.completed 
                            ? quiz.score! >= 80 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-yellow-100 text-yellow-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {quiz.completed ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="font-medium">{quiz.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{quiz.language}</Badge>
                            {quiz.completed ? (
                              <span className="text-sm text-gray-600">
                                Score: {quiz.score}/{quiz.maxScore}
                              </span>
                            ) : (
                              <span className="text-sm text-gray-600">Available</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant={quiz.completed ? "outline" : "default"}>
                        {quiz.completed ? 'Review' : 'Take Quiz'}
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/student/quizzes">View All Quizzes</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Your learning milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`text-center p-3 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-yellow-50 border-yellow-200' 
                        : 'bg-gray-50 border-gray-200 opacity-50'
                    }`}>
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <p className="text-xs font-medium">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Goal */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Daily Goal</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">30 min</div>
                  <Progress value={75} className="mb-3" />
                  <p className="text-sm text-gray-600 mb-4">
                    22 minutes completed today
                  </p>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Study Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/student/programs">
                    <BookOpen className="w-4 h-4 mr-3" />
                    Browse Programs
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/student/sessions">
                    <Users className="w-4 h-4 mr-3" />
                    Join Live Session
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/student/quizzes">
                    <Award className="w-4 h-4 mr-3" />
                    Practice Quiz
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/student/profile">
                    <Star className="w-4 h-4 mr-3" />
                    Update Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
