
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Plus } from 'lucide-react';

const TeacherQuizCreate = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Quiz</h1>
            <p className="text-gray-600">Build interactive quizzes for your students</p>
          </div>
        </div>

        <Card className="border-0 shadow-xl border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              Quiz Builder
            </CardTitle>
            <CardDescription>
              Create engaging quizzes with multiple question types
            </CardDescription>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <Award className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Interactive Quiz Creator</h3>
            <p className="text-gray-500 mb-6">
              Advanced quiz builder with multiple choice, true/false, and open-ended questions
            </p>
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
              <Plus className="w-4 h-4 mr-2" />
              Start Creating Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherQuizCreate;
