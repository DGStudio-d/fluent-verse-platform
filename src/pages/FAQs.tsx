
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, BookOpen, CreditCard, Users, Settings, MessageSquare } from 'lucide-react';

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, color: 'bg-gray-100 text-gray-700' },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, color: 'bg-blue-100 text-blue-700' },
    { id: 'billing', name: 'Billing & Plans', icon: CreditCard, color: 'bg-green-100 text-green-700' },
    { id: 'learning', name: 'Learning & Progress', icon: Users, color: 'bg-purple-100 text-purple-700' },
    { id: 'technical', name: 'Technical', icon: Settings, color: 'bg-orange-100 text-orange-700' },
    { id: 'account', name: 'Account Management', icon: MessageSquare, color: 'bg-red-100 text-red-700' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with LinguaLearn?',
      answer: 'Getting started is easy! Simply sign up for a free account, choose your target language, take our placement test to determine your level, and you\'ll be matched with appropriate lessons and teachers. You can start with our free trial which includes access to basic lessons and community features.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'What languages do you offer?',
      answer: 'We currently offer 12+ languages including English, Spanish, French, German, Italian, Portuguese, Arabic, Mandarin, Japanese, Korean, Russian, and Dutch. Each language has courses from beginner to advanced levels, with new languages being added regularly based on user demand.'
    },
    {
      id: 3,
      category: 'billing',
      question: 'What are your pricing plans?',
      answer: 'We offer flexible pricing plans to suit different needs: Free Plan (basic lessons and community access), Premium Plan ($19.99/month - unlimited lessons, live sessions, and progress tracking), and Pro Plan ($39.99/month - everything in Premium plus 1-on-1 tutoring and advanced analytics). All paid plans come with a 30-day money-back guarantee.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time through your account settings. If you cancel, you\'ll continue to have access to premium features until the end of your current billing period. We also offer a 30-day money-back guarantee for new subscribers.'
    },
    {
      id: 5,
      category: 'learning',
      question: 'How long does it take to become fluent?',
      answer: 'Fluency timelines vary based on several factors including your starting level, target language, study consistency, and personal goals. On average, our students achieve conversational level in 6-12 months with regular practice (30-60 minutes daily). Our adaptive learning system helps optimize your progress based on your learning style and pace.'
    },
    {
      id: 6,
      category: 'learning',
      question: 'Do you offer certificates upon completion?',
      answer: 'Yes! We provide certificates of completion for each level you finish. Our certificates are recognized by many educational institutions and employers. For additional credibility, we also offer preparation courses for internationally recognized language proficiency tests like TOEFL, IELTS, DELE, and DELF.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'What devices can I use to access LinguaLearn?',
      answer: 'LinguaLearn is fully responsive and works on all devices including desktop computers, laptops, tablets, and smartphones. You can access our platform through any modern web browser. We also have dedicated mobile apps for iOS and Android for learning on the go.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'Do I need special software or plugins?',
      answer: 'No special software is required! LinguaLearn runs entirely in your web browser. For the best experience with live video sessions, we recommend using Chrome, Firefox, Safari, or Edge with a stable internet connection, webcam, and microphone.'
    },
    {
      id: 9,
      category: 'account',
      question: 'How do I change my password or email?',
      answer: 'You can update your account information by going to your Profile Settings. Click on your avatar in the top right corner, select "Profile Settings," and you\'ll be able to change your email, password, and other personal information. For security, password changes require email verification.'
    },
    {
      id: 10,
      category: 'account',
      question: 'Can I learn multiple languages with one account?',
      answer: 'Absolutely! One account gives you access to all our available languages. You can switch between languages anytime and track your progress separately for each. Premium and Pro plan subscribers get full access to all languages, while free users can sample lessons from multiple languages.'
    },
    {
      id: 11,
      category: 'learning',
      question: 'How do live sessions work?',
      answer: 'Live sessions are interactive group or one-on-one classes with certified native speakers. You can join scheduled group sessions (8-15 students) or book private tutoring sessions. All sessions are conducted via our integrated video platform, include interactive exercises, and recordings are available for review afterward.'
    },
    {
      id: 12,
      category: 'billing',
      question: 'Do you offer student or bulk discounts?',
      answer: 'Yes! We offer 20% student discounts with valid student ID verification. We also provide institutional licenses for schools, universities, and corporations with custom pricing based on user volume. Contact our sales team for bulk pricing information.'
    },
    {
      id: 13,
      category: 'learning',
      question: 'What if I\'m not satisfied with my progress?',
      answer: 'We\'re committed to your success! If you\'re not satisfied with your progress, our learning consultants can help adjust your study plan, recommend additional resources, or switch teaching approaches. Premium users also get access to progress coaching sessions to optimize their learning strategy.'
    },
    {
      id: 14,
      category: 'technical',
      question: 'Is my data secure and private?',
      answer: 'Yes, we take data security seriously. All data is encrypted in transit and at rest, we comply with GDPR and CCPA regulations, and we never sell personal information to third parties. You can download or delete your data anytime through your account settings.'
    },
    {
      id: 15,
      category: 'getting-started',
      question: 'Can I try before I buy?',
      answer: 'Absolutely! We offer a comprehensive free trial that includes access to basic lessons, community features, and one sample live session. No credit card required for the free trial. You can explore the platform and see if it\'s right for you before committing to a paid plan.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about LinguaLearn. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 transition-all duration-200 ${
                  selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* FAQ Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            {filteredFAQs.length > 0 ? (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id.toString()} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="font-medium text-gray-900">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pl-8">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No FAQs found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search terms or browse different categories
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Questions</span>
                    <Badge variant="outline">{faqs.length}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Categories</span>
                    <Badge variant="outline">{categories.length - 1}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Showing Results</span>
                    <Badge variant="outline">{filteredFAQs.length}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Popular Topics</h3>
                <div className="space-y-3">
                  {categories.slice(1, 4).map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className="w-4 h-4 mr-3" />
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-gray-500">
                          {faqs.filter(faq => faq.category === category.id).length} questions
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Still Need Help?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full">
                    Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Additional Resources</h3>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-3" />
                    User Guide
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    Community Forum
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-3" />
                    Technical Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
