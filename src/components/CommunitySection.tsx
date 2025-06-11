
import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Shield, Plus, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CommunitySection = () => {
  const [anonymousMode, setAnonymousMode] = useState(false);
  
  const posts = [
    {
      id: 1,
      author: anonymousMode ? 'Anonymous' : 'Priya_123',
      avatar: '🌸',
      content: 'Anyone else get super emotional the week before their period? Like I cried watching a dog video today 😭',
      likes: 24,
      replies: 8,
      tags: ['periods', 'emotions'],
      timeAgo: '2h ago',
      isAnonymous: false
    },
    {
      id: 2,
      author: 'Anonymous',
      avatar: '🦋',
      content: 'How do you deal with period cramps at school? The nurse just gives me regular painkillers but they don\'t help much...',
      likes: 31,
      replies: 15,
      tags: ['periods', 'school', 'pain'],
      timeAgo: '4h ago',
      isAnonymous: true
    },
    {
      id: 3,
      author: anonymousMode ? 'Anonymous' : 'Luna_Moon',
      avatar: '🌙',
      content: 'Started using a menstrual cup and OMG why didn\'t anyone tell me how much better this is?! 🙌',
      likes: 45,
      replies: 12,
      tags: ['periods', 'products', 'tips'],
      timeAgo: '6h ago',
      isAnonymous: false
    }
  ];

  const mentors = [
    { name: 'Dr. Kavitha', specialty: 'Gynecologist', avatar: '👩‍⚕️', verified: true },
    { name: 'Deepika_Counselor', specialty: 'Mental Health', avatar: '🧠', verified: true },
    { name: 'Nutritionist_Ravi', specialty: 'Nutrition', avatar: '🥗', verified: true }
  ];

  const topics = [
    { name: 'Period Talk', count: 234, color: 'bg-red-100 text-red-800' },
    { name: 'Mental Health', count: 189, color: 'bg-blue-100 text-blue-800' },
    { name: 'Body Changes', count: 156, color: 'bg-green-100 text-green-800' },
    { name: 'School Life', count: 143, color: 'bg-purple-100 text-purple-800' },
    { name: 'Relationships', count: 98, color: 'bg-pink-100 text-pink-800' },
    { name: 'Self Care', count: 87, color: 'bg-yellow-100 text-yellow-800' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Sister Circle 💕</h1>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAnonymousMode(!anonymousMode)}
            className={anonymousMode ? 'bg-purple-100 text-purple-700' : ''}
          >
            {anonymousMode ? <EyeOff size={16} /> : <Eye size={16} />}
            <span className="ml-2">{anonymousMode ? 'Anonymous Mode' : 'Show Identity'}</span>
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus size={16} className="mr-2" />
            New Post
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-800">{post.author}</span>
                      {post.isAnonymous && <Shield size={14} className="text-purple-600" />}
                      <span className="text-sm text-gray-500">{post.timeAgo}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <Heart size={16} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <MessageCircle size={16} />
                        <span>{post.replies} replies</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Verified Mentors Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mentors.map((mentor) => (
                  <div key={mentor.name} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="text-2xl">{mentor.avatar}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1">
                        <span className="font-medium text-sm">{mentor.name}</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-600">{mentor.specialty}</span>
                    </div>
                    <MessageCircle size={16} className="text-purple-600" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <div key={topic.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <span className="text-sm font-medium">{topic.name}</span>
                    <Badge variant="secondary" className={`text-xs ${topic.color}`}>
                      {topic.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-purple-800">Community Guidelines</h4>
              <ul className="text-xs text-purple-700 space-y-1">
                <li>• Be kind and supportive</li>
                <li>• Respect privacy and anonymity</li>
                <li>• No medical diagnosis or advice</li>
                <li>• Report inappropriate content</li>
                <li>• Celebrate each other's growth</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
