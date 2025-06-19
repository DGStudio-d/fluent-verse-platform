
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Users, Clock, Star, BookOpen, Globe } from 'lucide-react';

const Languages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const languages = [
    {
      id: 1,
      name: 'English',
      description: 'Master the global language of business and communication',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      learners: 52000,
      lessons: 120,
      duration: '6-12 months',
      rating: 4.9,
      image: '🇺🇸',
      features: ['Business English', 'Academic Writing', 'Conversation Practice', 'Grammar Mastery'],
      popular: true
    },
    {
      id: 2,
      name: 'Spanish',
      description: 'Learn the second most spoken language in the world',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      learners: 48000,
      lessons: 110,
      duration: '6-10 months',
      rating: 4.8,
      image: '🇪🇸',
      features: ['Latin American Spanish', 'European Spanish', 'Cultural Context', 'Travel Spanish'],
      popular: true
    },
    {
      id: 3,
      name: 'French',
      description: 'Discover the language of love and diplomacy',
      levels: ['Beginner', 'Intermediate'],
      learners: 32000,
      lessons: 95,
      duration: '8-12 months',
      rating: 4.7,
      image: '🇫🇷',
      features: ['Parisian French', 'Business French', 'Literature', 'Pronunciation Guide'],
      popular: false
    },
    {
      id: 4,
      name: 'Arabic',
      description: 'Learn Modern Standard Arabic and regional dialects',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      learners: 28000,
      lessons: 140,
      duration: '12-18 months',
      rating: 4.6,
      image: '🇸🇦',
      features: ['Modern Standard Arabic', 'Gulf Dialect', 'Reading & Writing', 'Cultural Studies'],
      popular: false
    },
    {
      id: 5,
      name: 'German',
      description: 'Master the language of innovation and engineering',
      levels: ['Beginner', 'Intermediate'],
      learners: 25000,
      lessons: 100,
      duration: '8-14 months',
      rating: 4.5,
      image: '🇩🇪',
      features: ['Business German', 'Technical Vocabulary', 'Grammar Focus', 'Pronunciation'],
      popular: false
    },
    {
      id: 6,
      name: 'Mandarin',
      description: 'Learn the most spoken language in the world',
      levels: ['Beginner', 'Intermediate'],
      learners: 22000,
      lessons: 130,
      duration: '12-20 months',
      rating: 4.4,
      image: '🇨🇳',
      features: ['Simplified Characters', 'Pinyin System', 'Tones Practice', 'Cultural Context'],
      popular: false
    }
  ];

  const filteredLanguages = languages
    .filter(lang => 
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (levelFilter === 'all' || lang.levels.some(level => level.toLowerCase() === levelFilter))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.learners - a.learners;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Language Journey
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive language courses designed by experts and taught by native speakers
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLanguages.map((language) => (
              <Card key={language.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{language.image}</span>
                      <div>
                        <CardTitle className="text-xl">{language.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{language.rating}</span>
                        </div>
                      </div>
                    </div>
                    {language.popular && (
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-gray-600">
                    {language.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Level Badges */}
                  <div className="flex flex-wrap gap-2">
                    {language.levels.map((level) => (
                      <Badge key={level} variant="outline" className="text-xs">
                        {level}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center py-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium">{(language.learners / 1000).toFixed(0)}K+</div>
                      <div className="text-xs text-gray-500">Learners</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium">{language.lessons}</div>
                      <div className="text-xs text-gray-500">Lessons</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium">{language.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-700">What you'll learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {language.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform duration-200">
                    Start Learning {language.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLanguages.length === 0 && (
            <div className="text-center py-12">
              <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No languages found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find Your Language?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're constantly adding new languages. Request your preferred language and be the first to know when it's available.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Request a Language
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Languages;
