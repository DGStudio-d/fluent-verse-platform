
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle,
  Calendar,
  Award,
  Globe
} from 'lucide-react';

const StudentPrograms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const enrolledPrograms = [
    {
      id: 1,
      title: 'Spanish for Intermediate Learners',
      language: 'Spanish',
      level: 'Intermediate',
      instructor: 'Carlos Rodriguez',
      progress: 68,
      completedLessons: 14,
      totalLessons: 20,
      estimatedCompletion: '2 weeks',
      lastAccessed: '2 hours ago',
      nextLesson: 'Lesson 15: Past Tense Verbs',
      rating: 4.8,
      enrolled: true
    },
    {
      id: 2,
      title: 'French Fundamentals',
      language: 'French',
      level: 'Beginner',
      instructor: 'Marie Dubois',
      progress: 25,
      completedLessons: 5,
      totalLessons: 20,
      estimatedCompletion: '6 weeks',
      lastAccessed: '1 day ago',
      nextLesson: 'Lesson 6: Basic Greetings',
      rating: 4.9,
      enrolled: true
    }
  ];

  const availablePrograms = [
    {
      id: 3,
      title: 'Business English Mastery',
      language: 'English',
      level: 'Advanced',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      lessons: 24,
      students: 156,
      rating: 4.9,
      price: '$99',
      description: 'Advanced business communication skills for professionals',
      features: ['Email Writing', 'Presentations', 'Negotiations', 'Meetings'],
      enrolled: false
    },
    {
      id: 4,
      title: 'German for Travelers',
      language: 'German',
      level: 'Beginner',
      instructor: 'Klaus Weber',
      duration: '6 weeks',
      lessons: 18,
      students: 89,
      rating: 4.7,
      price: '$79',
      description: 'Essential German phrases and vocabulary for travel',
      features: ['Basic Conversations', 'Travel Vocabulary', 'Cultural Tips', 'Pronunciation'],
      enrolled: false
    },
    {
      id: 5,
      title: 'Advanced Spanish Literature',
      language: 'Spanish',
      level: 'Advanced',
      instructor: 'Isabel Martinez',
      duration: '10 weeks',
      lessons: 30,
      students: 67,
      rating: 4.8,
      price: '$149',
      description: 'Explore Spanish and Latin American literature',
      features: ['Classic Literature', 'Modern Authors', 'Critical Analysis', 'Writing Skills'],
      enrolled: false
    },
    {
      id: 6,
      title: 'Arabic Writing Workshop',
      language: 'Arabic',
      level: 'Intermediate',
      instructor: 'Ahmed Hassan',
      duration: '12 weeks',
      lessons: 36,
      students: 34,
      rating: 4.6,
      price: '$119',
      description: 'Master Arabic writing and calligraphy',
      features: ['Script Practice', 'Calligraphy', 'Formal Writing', 'Poetry'],
      enrolled: false
    }
  ];

  const filteredAvailablePrograms = availablePrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'all' || program.level.toLowerCase() === levelFilter;
    return matchesSearch && matchesLevel;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Learning Programs</h1>
          <p className="text-gray-600">
            Continue your enrolled courses or discover new languages to learn
          </p>
        </div>

        <Tabs defaultValue="enrolled" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="enrolled" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Enrolled ({enrolledPrograms.length})
            </TabsTrigger>
            <TabsTrigger value="browse" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Browse Programs
            </TabsTrigger>
          </TabsList>

          {/* Enrolled Programs */}
          <TabsContent value="enrolled" className="space-y-6">
            {enrolledPrograms.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-6">
                {enrolledPrograms.map((program) => (
                  <Card key={program.id} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getLevelColor(program.level)}>
                              {program.level}
                            </Badge>
                            <Badge variant="outline">{program.language}</Badge>
                          </div>
                          <CardDescription>
                            Instructor: {program.instructor}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{program.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{program.progress}%</span>
                        </div>
                        <Progress value={program.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{program.completedLessons}/{program.totalLessons} lessons completed</span>
                          <span>Est. completion: {program.estimatedCompletion}</span>
                        </div>
                      </div>

                      {/* Next Lesson */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Up Next:</h4>
                        <p className="text-blue-700 text-sm">{program.nextLesson}</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-center py-2">
                        <div>
                          <div className="text-sm text-gray-600">Last Accessed</div>
                          <div className="font-medium">{program.lastAccessed}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Completion Rate</div>
                          <div className="font-medium">{program.progress}%</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No Programs Enrolled</h3>
                  <p className="text-gray-500 mb-6">
                    Start your learning journey by enrolling in a program
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Browse Programs
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Browse Programs */}
          <TabsContent value="browse" className="space-y-6">
            {/* Filters */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search programs, languages, or instructors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Available Programs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAvailablePrograms.map((program) => (
                <Card key={program.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getLevelColor(program.level)}>
                            {program.level}
                          </Badge>
                          <Badge variant="outline">{program.language}</Badge>
                        </div>
                        <CardTitle className="text-lg mb-1">{program.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {program.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">{program.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Instructor & Stats */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{program.instructor}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-500">
                        <div>
                          <div className="flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3" />
                          </div>
                          <div>{program.duration}</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center gap-1">
                            <BookOpen className="w-3 h-3" />
                          </div>
                          <div>{program.lessons} lessons</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center gap-1">
                            <Users className="w-3 h-3" />
                          </div>
                          <div>{program.students} students</div>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{program.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({program.students} reviews)</span>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">What you'll learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {program.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform duration-200">
                        Enroll Now
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAvailablePrograms.length === 0 && (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No Programs Found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('');
                      setLevelFilter('all');
                    }}
                  >
                    Clear Filters
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

export default StudentPrograms;
