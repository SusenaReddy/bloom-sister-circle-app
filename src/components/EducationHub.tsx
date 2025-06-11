
import React, { useState } from 'react';
import { BookOpen, Play, Star, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const EducationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Topics', count: 48 },
    { id: 'periods', name: 'Period Health', count: 12 },
    { id: 'body', name: 'Body Changes', count: 8 },
    { id: 'mental', name: 'Mental Health', count: 10 },
    { id: 'nutrition', name: 'Nutrition', count: 6 },
    { id: 'relationships', name: 'Relationships', count: 7 },
    { id: 'safety', name: 'Safety', count: 5 }
  ];

  const content = [
    {
      id: 1,
      title: 'Understanding Your Menstrual Cycle',
      description: 'Learn about the different phases of your cycle and what to expect',
      type: 'video',
      duration: '5 min',
      difficulty: 'Beginner',
      category: 'periods',
      thumbnail: '🩸',
      completed: true,
      rating: 4.8,
      viewers: 1234
    },
    {
      id: 2,
      title: 'Is My Discharge Normal?',
      description: 'Everything you need to know about vaginal discharge and when to see a doctor',
      type: 'article',
      duration: '3 min read',
      difficulty: 'Beginner',
      category: 'body',
      thumbnail: '🔍',
      completed: false,
      rating: 4.9,
      viewers: 987
    },
    {
      id: 3,
      title: 'Dealing with Period Pain',
      description: 'Natural remedies and when to seek medical help for menstrual cramps',
      type: 'interactive',
      duration: '7 min',
      difficulty: 'Intermediate',
      category: 'periods',
      thumbnail: '💊',
      completed: false,
      rating: 4.7,
      viewers: 756
    },
    {
      id: 4,
      title: 'Breast Changes During Puberty',
      description: 'What to expect and when changes are normal vs concerning',
      type: 'video',
      duration: '4 min',
      difficulty: 'Beginner',
      category: 'body',
      thumbnail: '🌸',
      completed: true,
      rating: 4.6,
      viewers: 543
    },
    {
      id: 5,
      title: 'Managing Anxiety & Mood Swings',
      description: 'Tools and techniques for emotional wellness during hormonal changes',
      type: 'interactive',
      duration: '10 min',
      difficulty: 'Intermediate',
      category: 'mental',
      thumbnail: '🧘‍♀️',
      completed: false,
      rating: 4.9,
      viewers: 892
    },
    {
      id: 6,
      title: 'Nutrition for Healthy Periods',
      description: 'Foods that can help reduce PMS and support your cycle',
      type: 'article',
      duration: '5 min read',
      difficulty: 'Beginner',
      category: 'nutrition',
      thumbnail: '🥗',
      completed: false,
      rating: 4.5,
      viewers: 678
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Period Myth Buster',
      questions: 10,
      difficulty: 'Easy',
      points: 50,
      taken: true,
      score: 90
    },
    {
      id: 2,
      title: 'Body Knowledge Check',
      questions: 15,
      difficulty: 'Medium',
      points: 75,
      taken: false,
      score: null
    },
    {
      id: 3,
      title: 'Wellness Expert',
      questions: 20,
      difficulty: 'Hard',
      points: 100,
      taken: false,
      score: null
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? content 
    : content.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play size={16} className="text-red-500" />;
      case 'article': return <BookOpen size={16} className="text-blue-500" />;
      case 'interactive': return <Star size={16} className="text-purple-500" />;
      default: return <BookOpen size={16} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Health Education Hub 📚</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Star className="text-yellow-500" size={16} />
          <span>245 learning points earned</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between
                      ${selectedCategory === category.id 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'hover:bg-gray-50 text-gray-700'}
                    `}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg">Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Period Health</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Body Changes</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Mental Health</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Test Your Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quizzes.map((quiz) => (
                  <Card key={quiz.id} className="p-4 border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <Award size={20} className="text-yellow-500" />
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                    <h4 className="font-medium mb-2">{quiz.title}</h4>
                    <div className="text-sm text-gray-600 mb-3">
                      <div>{quiz.questions} questions</div>
                      <div>+{quiz.points} points</div>
                    </div>
                    {quiz.taken ? (
                      <div className="text-sm text-green-600 font-medium">
                        Completed: {quiz.score}%
                      </div>
                    ) : (
                      <Button size="sm" className="w-full">Start Quiz</Button>
                    )}
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredContent.map((item) => (
              <Card key={item.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{item.thumbnail}</div>
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(item.type)}
                      {item.completed && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className={getDifficultyColor(item.difficulty)}>
                      {item.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-500" />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={12} />
                        <span>{item.viewers}</span>
                      </div>
                    </div>
                    <Button size="sm" variant={item.completed ? "outline" : "default"}>
                      {item.completed ? 'Review' : 'Start'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;
