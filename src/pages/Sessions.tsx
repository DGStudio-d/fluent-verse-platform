import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Search, Video, Globe, User } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Sessions = () => {
  const { t } = useTranslation(['sessions', 'common']);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');

  const sessions = [
    {
      id: 1,
      title: 'English Conversation Practice',
      language: 'English',
      level: 'Intermediate',
      teacher: 'Sarah Johnson',
      date: '2024-06-20',
      time: '10:00 AM',
      duration: '60 min',
      participants: 8,
      maxParticipants: 12,
      price: 'Free',
      description: 'Practice everyday English conversation in a supportive environment',
      topics: ['Daily Activities', 'Travel', 'Work & Career'],
      featured: true
    },
    {
      id: 2,
      title: 'Spanish Grammar Fundamentals',
      language: 'Spanish',
      level: 'Beginner',
      teacher: 'Carlos Rodriguez',
      date: '2024-06-20',
      time: '2:00 PM',
      duration: '90 min',
      participants: 15,
      maxParticipants: 20,
      price: '$15',
      description: 'Master the basics of Spanish grammar with interactive exercises',
      topics: ['Verb Conjugation', 'Articles', 'Pronouns'],
      featured: false
    },
    {
      id: 3,
      title: 'French Pronunciation Workshop',
      language: 'French',
      level: 'Beginner',
      teacher: 'Marie Dubois',
      date: '2024-06-21',
      time: '11:00 AM',
      duration: '45 min',
      participants: 6,
      maxParticipants: 10,
      price: '$20',
      description: 'Perfect your French pronunciation with native speaker guidance',
      topics: ['Phonetics', 'Accent Marks', 'Liaison'],
      featured: true
    },
    {
      id: 4,
      title: 'Arabic Writing Practice',
      language: 'Arabic',
      level: 'Advanced',
      teacher: 'Ahmed Hassan',
      date: '2024-06-21',
      time: '4:00 PM',
      duration: '75 min',
      participants: 4,
      maxParticipants: 8,
      price: '$25',
      description: 'Advanced Arabic writing techniques and calligraphy basics',
      topics: ['Formal Writing', 'Calligraphy', 'Poetry'],
      featured: false
    },
    {
      id: 5,
      title: 'German Business Language',
      language: 'German',
      level: 'Advanced',
      teacher: 'Klaus Weber',
      date: '2024-06-22',
      time: '9:00 AM',
      duration: '120 min',
      participants: 10,
      maxParticipants: 15,
      price: '$30',
      description: 'Professional German for business and workplace communication',
      topics: ['Business Emails', 'Presentations', 'Negotiations'],
      featured: false
    },
    {
      id: 6,
      title: 'Mandarin Cultural Context',
      language: 'Mandarin',
      level: 'Intermediate',
      teacher: 'Li Wei',
      date: '2024-06-22',
      time: '3:00 PM',
      duration: '60 min',
      participants: 7,
      maxParticipants: 12,
      price: '$18',
      description: 'Understanding Chinese culture through language and traditions',
      topics: ['Festivals', 'Business Culture', 'Social Customs'],
      featured: true
    }
  ];

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = languageFilter === 'all' || session.language === languageFilter;
    const matchesLevel = levelFilter === 'all' || session.level === levelFilter;
    
    return matchesSearch && matchesLanguage && matchesLevel;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100';
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
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <LanguageSwitcher />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('sessions:title')}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t('sessions:subtitle')}
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
                placeholder={t('sessions:searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={languageFilter} onValueChange={setLanguageFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t('sessions:filters.allLanguages')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('sessions:filters.allLanguages')}</SelectItem>
                  <SelectItem value="English">{t('sessions:languages.English')}</SelectItem>
                  <SelectItem value="Spanish">{t('sessions:languages.Spanish')}</SelectItem>
                  <SelectItem value="French">{t('sessions:languages.French')}</SelectItem>
                  <SelectItem value="Arabic">{t('sessions:languages.Arabic')}</SelectItem>
                  <SelectItem value="German">{t('sessions:languages.German')}</SelectItem>
                  <SelectItem value="Mandarin">{t('sessions:languages.Mandarin')}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t('sessions:filters.allLevels')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('sessions:filters.allLevels')}</SelectItem>
                  <SelectItem value="Beginner">{t('common:levels.beginner')}</SelectItem>
                  <SelectItem value="Intermediate">{t('common:levels.intermediate')}</SelectItem>
                  <SelectItem value="Advanced">{t('common:levels.advanced')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredSessions.map((session) => (
              <Card key={session.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 group ${session.featured ? 'ring-2 ring-emerald-200' : ''}`}>
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {session.featured && (
                          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                            {t('sessions:featured')}
                          </Badge>
                        )}
                        <Badge className={getLevelColor(session.level)}>
                          {t(`common:levels.${session.level.toLowerCase()}`)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {session.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">{session.price}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Session Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium">{t(`sessions:languages.${session.language}`)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-green-600" />
                        <span>{session.teacher}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span>{session.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span>{formatDate(session.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-indigo-600" />
                        <span>{session.participants}/{session.maxParticipants} {t('sessions:details.participants')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">{t('sessions:details.sessionTopics')}</h4>
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
                      <span className="text-gray-600">{t('sessions:details.availability')}</span>
                      <span className="text-gray-600">
                        {session.maxParticipants - session.participants} {t('sessions:details.spotsLeft')}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-600 to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(session.participants / session.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                      disabled={session.participants >= session.maxParticipants}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      {session.participants >= session.maxParticipants ? t('sessions:details.full') : t('sessions:details.joinSession')}
                    </Button>
                    <Button variant="outline" size="sm">
                      {t('sessions:details.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">{t('sessions:noSessions.title')}</h3>
              <p className="text-gray-500">{t('sessions:noSessions.description')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('sessions:cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t('sessions:cta.description')}
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            {t('sessions:cta.button')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sessions;
