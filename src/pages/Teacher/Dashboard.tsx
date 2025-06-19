
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Award, 
  Clock, 
  Star,
  TrendingUp,
  MessageSquare,
  Video,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const TeacherDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Students', value: '47', icon: Users, color: 'text-blue-600' },
    { label: 'Sessions This Week', value: '12', icon: Calendar, color: 'text-green-600' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'text-yellow-500' },
    { label: 'Hours Taught', value: '156', icon: Clock, color: 'text-purple-600' }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Spanish Conversation Practice',
      time: 'Today, 2:00 PM',
      duration: '60 min',
      students: 8,
      maxStudents: 12,
      level: 'Intermediate',
      type: 'Group Session'
    },
    {
      id: 2,
      title: 'Grammar Workshop: Past Tense',
      time: 'Tomorrow, 10:00 AM',
      duration: '90 min',
      students: 15,
      maxStudents: 20,
      level: 'Beginner',
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'One-on-One Tutoring - Maria',
      time: 'Tomorrow, 3:00 PM',
      duration: '45 min',
      students: 1,
      maxStudents: 1,
      level: 'Advanced',
      type: 'Private'
    }
  ];

  const recentQuizResults = [
    {
      id: 1,
      quiz: 'Spanish Vocabulary #3',
      students: 23,
      avgScore: 85,
      completionRate: 92,
      createdAt: '2 days ago'
    },
    {
      id: 2,
      quiz: 'Grammar Basics Test',
      students: 31,
      avgScore: 78,
      completionRate: 87,
      createdAt: '1 week ago'
    }
  ];

  const studentProgress = [
    { name: 'Maria Garcia', progress: 78, lastActive: '2 hours ago', currentLesson: 'Lesson 15' },
    { name: 'John Smith', progress: 65, lastActive: '1 day ago', currentLesson: 'Lesson 12' },
    { name: 'Lisa Chen', progress: 92, lastActive: '30 min ago', currentLesson: 'Lesson 18' },
    { name: 'Ahmed Hassan', progress: 45, lastActive: '3 days ago', currentLesson: 'Lesson 9' }
  ];

  const announcements = [
    {
      id: 1,
      title: 'New Quiz Feature Available',
      message: 'You can now add audio questions to your quizzes',
      type: 'feature',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Session Reminder',
      message: 'Your Spanish Conversation session starts in 30 minutes',
      type: 'reminder',
      time: '30 min ago'
    }
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
            Here's an overview of your teaching activities and student progress.
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
            {/* Upcoming Sessions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>
                  Your scheduled teaching sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{session.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{session.level}</Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                              {session.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{session.time} • {session.duration}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <Video className="w-4 h-4 mr-2" />
                            Start Session
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{session.students}/{session.maxStudents} students enrolled</span>
                        <div className="w-24">
                          <Progress value={(session.students / session.maxStudents) * 100} className="h-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/teacher/schedule">View All Sessions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quiz Results */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Recent Quiz Results
                </CardTitle>
                <CardDescription>
                  Performance overview of your recent quizzes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQuizResults.map((quiz) => (
                    <div key={quiz.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{quiz.quiz}</h3>
                          <p className="text-sm text-gray-600">Created {quiz.createdAt}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-blue-600">{quiz.students}</div>
                          <div className="text-xs text-gray-500">Students</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-green-600">{quiz.avgScore}%</div>
                          <div className="text-xs text-gray-500">Avg Score</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-purple-600">{quiz.completionRate}%</div>
                          <div className="text-xs text-gray-500">Completion</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/teacher/results">View All Results</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Student Progress */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Student Progress
                </CardTitle>
                <CardDescription>
                  Keep track of your students' learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentProgress.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-gray-600">
                            {student.currentLesson} • Last active {student.lastActive}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{student.progress}%</div>
                        <div className="w-20">
                          <Progress value={student.progress} className="h-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/teacher/programs">View All Students</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <Link to="/teacher/schedule">
                    <Calendar className="w-4 h-4 mr-3" />
                    Schedule Session
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/teacher/quiz-create">
                    <Award className="w-4 h-4 mr-3" />
                    Create Quiz
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/teacher/programs">
                    <BookOpen className="w-4 h-4 mr-3" />
                    Manage Programs
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/teacher/results">
                    <TrendingUp className="w-4 h-4 mr-3" />
                    View Analytics
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-start gap-2">
                        {announcement.type === 'feature' ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{announcement.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{announcement.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{announcement.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Teaching Stats */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">This Month</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">32</div>
                      <div className="text-xs text-gray-600">Sessions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">4.9</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Excellent feedback from students!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
