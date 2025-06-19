
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp, 
  DollarSign,
  Globe,
  AlertTriangle,
  CheckCircle,
  Settings,
  BarChart3,
  UserCheck
} from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();

  const systemStats = [
    { label: 'Total Users', value: '12,847', change: '+8.2%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Programs', value: '156', change: '+12', icon: BookOpen, color: 'text-green-600' },
    { label: 'Live Sessions', value: '89', change: '+5.4%', icon: Calendar, color: 'text-purple-600' },
    { label: 'Monthly Revenue', value: '$45,231', change: '+15.3%', icon: DollarSign, color: 'text-orange-600' }
  ];

  const userBreakdown = [
    { role: 'Students', count: 11420, percentage: 89, color: 'bg-blue-500' },
    { role: 'Teachers', count: 827, percentage: 6.4, color: 'bg-green-500' },
    { role: 'Admins', count: 15, percentage: 0.1, color: 'bg-purple-500' }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'user_signup',
      message: '23 new students registered today',
      time: '2 hours ago',
      status: 'positive'
    },
    {
      id: 2,
      type: 'session_created',
      message: 'New Spanish workshop scheduled by Carlos Rodriguez',
      time: '4 hours ago',
      status: 'info'
    },
    {
      id: 3,
      type: 'payment_received',
      message: 'Monthly subscription payments processed: $8,430',
      time: '6 hours ago',
      status: 'positive'
    },
    {
      id: 4,
      type: 'system_alert',
      message: 'Server maintenance scheduled for tonight',
      time: '8 hours ago',
      status: 'warning'
    }
  ];

  const topLanguages = [
    { language: 'Spanish', students: 4250, sessions: 324, growth: '+12%' },
    { language: 'English', students: 3890, sessions: 298, growth: '+8%' },
    { language: 'French', students: 2140, sessions: 156, growth: '+15%' },
    { language: 'German', students: 1680, sessions: 134, growth: '+6%' }
  ];

  const systemHealth = [
    { metric: 'Server Uptime', value: '99.9%', status: 'excellent' },
    { metric: 'Response Time', value: '124ms', status: 'good' },
    { metric: 'Active Sessions', value: '1,247', status: 'good' },
    { metric: 'Storage Usage', value: '67%', status: 'warning' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'positive':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
    }
  };

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600';
      case 'good':
        return 'text-blue-600';
      case 'warning':
        return 'text-yellow-600';
      case 'critical':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            System overview and platform management tools
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
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
            {/* User Breakdown */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  User Distribution
                </CardTitle>
                <CardDescription>
                  Breakdown of platform users by role
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userBreakdown.map((userType, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${userType.color}`}></div>
                          <span className="font-medium">{userType.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{userType.count.toLocaleString()}</span>
                          <span className="text-sm font-medium">{userType.percentage}%</span>
                        </div>
                      </div>
                      <Progress value={userType.percentage * 10} className="h-2" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/admin/users">Manage Users</Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/admin/reports">View Reports</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Top Languages */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  Top Languages
                </CardTitle>
                <CardDescription>
                  Most popular languages on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topLanguages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">
                          {language.language === 'Spanish' && '🇪🇸'}
                          {language.language === 'English' && '🇺🇸'}
                          {language.language === 'French' && '🇫🇷'}
                          {language.language === 'German' && '🇩🇪'}
                        </div>
                        <div>
                          <h3 className="font-semibold">{language.language}</h3>
                          <p className="text-sm text-gray-600">
                            {language.students.toLocaleString()} students • {language.sessions} active sessions
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          {language.growth}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/admin/languages">Manage Languages</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest platform activities and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      {getStatusIcon(activity.status)}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Admin Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <Link to="/admin/users">
                    <UserCheck className="w-4 h-4 mr-3" />
                    Manage Users
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/admin/programs">
                    <BookOpen className="w-4 h-4 mr-3" />
                    Manage Programs
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/admin/sessions">
                    <Calendar className="w-4 h-4 mr-3" />
                    Monitor Sessions
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/admin/settings">
                    <Settings className="w-4 h-4 mr-3" />
                    System Settings
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{metric.metric}</span>
                      <span className={`text-sm font-medium ${getHealthColor(metric.status)}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Report
                </Button>
              </CardContent>
            </Card>

            {/* Platform Stats */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-4">Platform Growth</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">+23%</div>
                      <div className="text-xs text-gray-600">User Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">+15%</div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Platform performance is excellent this month!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Settings */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Quick Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Settings className="w-4 h-4 mr-3" />
                  Platform Maintenance
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Globe className="w-4 h-4 mr-3" />
                  Add New Language
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Award className="w-4 h-4 mr-3" />
                  Manage Certifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
