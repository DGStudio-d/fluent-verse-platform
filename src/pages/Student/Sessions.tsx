
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users, Video, Search, User, Globe, CheckCircle } from 'lucide-react';

const StudentSessions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('all');

  const upcomingSessions = [
    {
      id: 1,
      title: 'Spanish Conversation Practice',
      teacher: 'Carlos Rodriguez',
      date: '2024-06-20',
      time: '2:00 PM',
      duration: '60 min',
      participants: 8,
      maxParticipants: 12,
      language: 'Spanish',
      level: 'Intermediate',
      description: 'Practice everyday Spanish conversation in a supportive environment',
      topics: ['Daily Activities', 'Travel', 'Work & Career'],
      joined: true
    },
    {
      id: 2,
      title: 'French Grammar Workshop',
      teacher: 'Marie Dubois',
      date: '2024-06-21',
      time: '11:00 AM',
      duration: '45 min',
      participants: 6,
      maxParticipants: 10,
      language: 'French',
      level: 'Beginner',
      description: 'Interactive French grammar exercises and explanations',
      topics: ['Verb Conjugation', 'Articles', 'Pronouns'],
      joined: true
    }
  ];

  const availableSessions = [
    {
      id: 3,
      title: 'English Business Communication',
      teacher: 'Sarah Johnson',
      date: '2024-06-22',
      time: '3:00 PM',
      duration: '90 min',
      participants: 15,
      maxParticipants: 20,
      language: 'English',
      level: 'Advanced',
      price: '$25',
      description: 'Professional English for business settings',
      topics: ['Presentations', 'Meetings', 'Email Writing'],
      joined: false
    },
    {
      id: 4,
      title: 'German Cultural Context',
      teacher: 'Klaus Weber',
      date: '2024-06-23',
      time: '10:00 AM',
      duration: '75 min',
      participants: 12,
      maxParticipants: 15,
      language: 'German',
      level: 'Intermediate',
      price: '$20',
      description: 'Understanding German culture through language',
      topics: ['Traditions', 'Social Customs', 'History'],
      joined: false
    }
  ];

  const pastSessions = [
    {
      id: 5,
      title: 'Spanish Pronunciation Basics',
      teacher: 'Isabel Martinez',
      date: '2024-06-18',
      time: '4:00 PM',
      duration: '60 min',
      language: 'Spanish',
      level: 'Beginner',
      attended: true,
      rating: 5,
      recording: true
    },
    {
      id: 6,
      title: 'French Literature Discussion',
      teacher: 'Jean-Pierre Dubois',
      date: '2024-06-15',
      time: '2:00 PM',
      duration: '90 min',
      language: 'French',
      level: 'Advanced',
      attended: true,
      rating: 4,
      recording: true
    }
  ];

  const filteredAvailableSessions = availableSessions.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = languageFilter === 'all' || session.language === languageFilter;
    return matchesSearch && matchesLanguage;
  });

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Sessions</h1>
          <p className="text-gray-600">
            Join interactive sessions with native speakers and expert teachers
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full max-w-lg grid-cols-3">
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Upcoming ({upcomingSessions.length})
            </TabsTrigger>
            <TabsTrigger value="browse" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Browse
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Past Sessions
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Sessions */}
          <TabsContent value="upcoming" className="space-y-6">
            {upcomingSessions.length > 0 ? (
              <div className="space-y-6">
                {upcomingSessions.map((session) => (
                  <Card key={session.id} className="border-0 shadow-xl">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getLevelColor(session.level)}>
                              {session.level}
                            </Badge>
                            <Badge variant="outline">{session.language}</Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                              Enrolled
                            </Badge>
                          </div>
                          <CardDescription>{session.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600 mb-1">Joined</div>
                          <div className="text-sm text-gray-500">
                            {session.participants}/{session.maxParticipants} participants
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Session Details */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{formatDate(session.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span>{session.time} ({session.duration})</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-purple-600" />
                          <span>{session.teacher}</span>
                        </div>
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Session Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {session.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Session Capacity</span>
                          <span className="text-gray-600">
                            {session.maxParticipants - session.participants} spots left
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                            style={{ width: `${(session.participants / session.maxParticipants) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Video className="w-4 h-4 mr-2" />
                          Join Session
                        </Button>
                        <Button variant="outline">
                          View Details
                        </Button>
                        <Button variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No Upcoming Sessions</h3>
                  <p className="text-gray-500 mb-6">
                    Browse available sessions to join your next live class
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Browse Sessions
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Browse Available Sessions */}
          <TabsContent value="browse" className="space-y-6">
            {/* Filters */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search sessions or teachers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={languageFilter} onValueChange={setLanguageFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Languages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="German">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Available Sessions */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredAvailableSessions.map((session) => (
                <Card key={session.id} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{session.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getLevelColor(session.level)}>
                            {session.level}
                          </Badge>
                          <Badge variant="outline">{session.language}</Badge>
                        </div>
                        <CardDescription className="text-sm">
                          {session.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">{session.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Session Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(session.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{session.teacher}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{session.participants}/{session.maxParticipants}</span>
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {session.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={session.participants >= session.maxParticipants}
                    >
                      {session.participants >= session.maxParticipants ? 'Session Full' : 'Join Session'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Sessions */}
          <TabsContent value="past" className="space-y-6">
            <div className="space-y-4">
              {pastSessions.map((session) => (
                <Card key={session.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{session.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getLevelColor(session.level)}>
                            {session.level}
                          </Badge>
                          <Badge variant="outline">{session.language}</Badge>
                          {session.attended && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              Attended
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{formatDate(session.date)} at {session.time}</span>
                          <span>Duration: {session.duration}</span>
                          <span>Teacher: {session.teacher}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {session.recording && (
                          <Button variant="outline" size="sm">
                            <Video className="w-4 h-4 mr-2" />
                            Watch Recording
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          Rate Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentSessions;
