import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green via-secondary-green to-primary-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Languages with
              <span className="text-primary-green-light"> Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50 max-w-3xl mx-auto">
              Join thousands of learners on their journey to fluency with our interactive platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-green hover:bg-gray-50 font-semibold px-8 py-4">
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-green px-8 py-4">
                Explore Languages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience language learning like never before with our cutting-edge features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary-green/20 hover:border-primary-green/40 transition-colors shadow-md hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Teachers</h3>
                <p className="text-gray-600">Learn from certified native speakers and experienced language educators</p>
              </CardContent>
            </Card>

            <Card className="border-primary-green/20 hover:border-primary-green/40 transition-colors shadow-md hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Interactive Lessons</h3>
                <p className="text-gray-600">Engage with multimedia content, quizzes, and real-time practice sessions</p>
              </CardContent>
            </Card>

            <Card className="border-primary-green/20 hover:border-primary-green/40 transition-colors shadow-md hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Track Progress</h3>
                <p className="text-gray-600">Monitor your learning journey with detailed analytics and achievements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">50K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">500+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">25+</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Language Journey?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join our community today and unlock your potential in a new language
          </p>
          <Button size="lg" className="bg-white text-primary-green hover:bg-gray-50 font-semibold px-8 py-4">
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;