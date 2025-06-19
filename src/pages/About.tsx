
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Target, 
  Lightbulb,
  Star,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Active Learners', value: '150,000+', icon: Users },
    { label: 'Languages Offered', value: '12+', icon: Globe },
    { label: 'Native Teachers', value: '500+', icon: Award },
    { label: 'Success Rate', value: '94%', icon: Star }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Connection',
      description: 'Breaking down language barriers to connect people across cultures and continents.'
    },
    {
      icon: Heart,
      title: 'Personalized Learning',
      description: 'Every learner is unique. We adapt our teaching methods to fit your learning style and pace.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Whether for business, travel, or personal growth, we help you achieve your specific language goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and proven teaching methodologies for effective learning.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      image: '👩‍💼',
      bio: 'Former linguistics professor with 15 years of experience in language education technology.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Curriculum',
      image: '👨‍🏫',
      bio: 'Polyglot educator who speaks 8 languages and has taught students in over 30 countries.'
    },
    {
      name: 'Aisha Patel',
      role: 'Learning Experience Director',
      image: '👩‍💻',
      bio: 'UX researcher specializing in educational technology and adaptive learning systems.'
    },
    {
      name: 'Jean-Pierre Dubois',
      role: 'Cultural Integration Lead',
      image: '👨‍🎓',
      bio: 'Cultural anthropologist ensuring authentic cultural context in every lesson.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'LinguaLearn founded with a vision to democratize language learning' },
    { year: '2021', event: 'Launched our first 5 languages with 50 native teachers' },
    { year: '2022', event: 'Reached 50,000 active learners and introduced AI-powered practice' },
    { year: '2023', event: 'Expanded to 12 languages and partnered with universities worldwide' },
    { year: '2024', event: 'Celebrating 150,000+ learners and launching advanced business programs' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              🌍 Connecting Cultures Through Language
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Mission is to Make 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Language Learning Accessible
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              At LinguaLearn, we believe that language is the bridge to understanding, opportunity, and connection. 
              Our platform empowers millions of learners to achieve fluency through innovative technology and expert instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/register">Join Our Community</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/languages">Explore Languages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  LinguaLearn was born from a simple yet powerful idea: language learning should be 
                  accessible, engaging, and effective for everyone, regardless of their background or location.
                </p>
                <p>
                  Founded in 2020 by a team of linguists, educators, and technologists, we set out to 
                  revolutionize how people learn languages. We recognized that traditional methods often 
                  failed to provide the personalized, interactive experience that modern learners need.
                </p>
                <p>
                  Today, we're proud to serve a global community of over 150,000 learners, connecting 
                  them with expert teachers and cutting-edge learning technology. Our platform combines 
                  the best of human instruction with AI-powered personalization to create truly effective 
                  language learning experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <BookOpen className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">150,000+ Success Stories</h3>
                <p className="mb-6">
                  From business professionals expanding their career opportunities to travelers 
                  connecting with local cultures, our learners achieve their goals every day.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Read Success Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at LinguaLearn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and technologists working together to transform language learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to democratize language learning
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Global Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or looking to perfect your skills, we have the perfect program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/register">Start Learning Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
