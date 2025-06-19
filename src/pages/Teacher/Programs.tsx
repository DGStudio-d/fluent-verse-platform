
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, Plus } from 'lucide-react';

const TeacherPrograms = () => {
  const programs = [
    {
      id: 1,
      title: 'Spanish for Intermediate Learners',
      students: 47,
      lessons: 20,
      level: 'Intermediate',
      status: 'Active',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'Spanish Grammar Fundamentals',
      students: 23,
      lessons: 15,
      level: 'Beginner',
      status: 'Active',
      lastUpdated: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Programs</h1>
            <p className="text-gray-600">Manage your language teaching programs</p>
          </div>
          <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            Create Program
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="border-0 shadow-xl hover:shadow-2xl transition-shadow border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-emerald-300 text-emerald-700">{program.level}</Badge>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    {program.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <Users className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                    <div className="font-medium">{program.students}</div>
                    <div className="text-gray-500">Students</div>
                  </div>
                  <div>
                    <BookOpen className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                    <div className="font-medium">{program.lessons}</div>
                    <div className="text-gray-500">Lessons</div>
                  </div>
                  <div>
                    <Clock className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                    <div className="font-medium text-xs">{program.lastUpdated}</div>
                    <div className="text-gray-500">Updated</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-emerald-300 text-emerald-700 hover:bg-emerald-50">Edit</Button>
                  <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherPrograms;
