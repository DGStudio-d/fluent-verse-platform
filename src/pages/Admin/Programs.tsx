
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const AdminPrograms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Program Management</h1>
          <p className="text-gray-600">Oversee all language learning programs</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Program Directory
            </CardTitle>
            <CardDescription>
              Manage all language programs across the platform
            </CardDescription>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Program Management</h3>
            <p className="text-gray-500">
              Administrative tools for managing language programs, curricula, and course content
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPrograms;
