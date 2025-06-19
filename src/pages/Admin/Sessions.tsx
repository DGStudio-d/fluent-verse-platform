
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const AdminSessions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Session Management</h1>
          <p className="text-gray-600">Monitor and manage live sessions</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Session Monitor
            </CardTitle>
            <CardDescription>
              Real-time session monitoring and management
            </CardDescription>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Session Dashboard</h3>
            <p className="text-gray-500">
              Monitor active sessions, view attendance, and manage session schedules
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSessions;
