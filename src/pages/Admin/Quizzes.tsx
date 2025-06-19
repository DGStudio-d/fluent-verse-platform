
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const AdminQuizzes = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Management</h1>
          <p className="text-gray-600">Oversee platform quizzes and assessments</p>
        </div>

        <Card className="border-0 shadow-xl border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              Quiz Administration
            </CardTitle>
            <CardDescription>
              Manage quizzes, assessments, and evaluation tools
            </CardDescription>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <Award className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Assessment Management</h3>
            <p className="text-gray-500">
              Administrative control over platform quizzes, assessments, and grading systems
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminQuizzes;
