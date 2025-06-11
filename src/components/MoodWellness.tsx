
import React, { useState } from 'react';
import { Heart, Music, MessageCircle, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MoodWellnessProps {
  expanded?: boolean;
}

const MoodWellness = ({ expanded = false }: MoodWellnessProps) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const moods = [
    { emoji: '😄', label: 'Amazing', color: 'bg-green-400' },
    { emoji: '😊', label: 'Good', color: 'bg-blue-400' },
    { emoji: '😐', label: 'Okay', color: 'bg-yellow-400' },
    { emoji: '😔', label: 'Down', color: 'bg-orange-400' },
    { emoji: '😢', label: 'Sad', color: 'bg-red-400' },
  ];

  const activities = [
    { icon: '🧘‍♀️', title: '2-min breathing', duration: '2 min' },
    { icon: '🎵', title: 'Mood playlist', duration: '15 min' },
    { icon: '✍️', title: 'Quick journal', duration: '5 min' },
    { icon: '🚶‍♀️', title: 'Walk outside', duration: '10 min' },
  ];

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <Heart size={24} className="text-pink-600" />
          <span>Mood & Wellness</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-3">How are you feeling today?</h4>
          <div className="flex space-x-2">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`
                  flex-1 p-3 rounded-lg text-center transition-all
                  ${selectedMood === mood.label 
                    ? `${mood.color} scale-105 shadow-md` 
                    : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <div className="text-2xl mb-1">{mood.emoji}</div>
                <div className="text-xs font-medium">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-3">Suggested activities</h4>
          <div className="grid grid-cols-2 gap-2">
            {activities.map((activity) => (
              <Button
                key={activity.title}
                variant="outline"
                className="h-auto p-3 flex-col space-y-1 hover:bg-purple-50"
              >
                <span className="text-xl">{activity.icon}</span>
                <span className="text-xs font-medium">{activity.title}</span>
                <span className="text-xs text-gray-500">{activity.duration}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="flex items-center space-x-1">
            <Music size={16} />
            <span>Mood Playlist</span>
          </Button>
          
          <Button size="sm" className="bg-pink-600 hover:bg-pink-700 flex items-center space-x-1">
            <MessageCircle size={16} />
            <span>Ask Didi</span>
          </Button>
        </div>

        {expanded && (
          <div className="mt-6 space-y-4">
            <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50">
              <h4 className="font-medium mb-2">Today's Journal Prompt</h4>
              <p className="text-sm text-gray-600 mb-3">
                "What's one thing you're grateful for today, and why does it matter to you?"
              </p>
              <Button size="sm" variant="outline">Start Writing</Button>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="font-medium mb-2 flex items-center space-x-2">
                  <span>🎵</span>
                  <span>Your Mood Playlist</span>
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Happy Vibes</span>
                    <span className="text-gray-500">12 songs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chill & Calm</span>
                    <span className="text-gray-500">8 songs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Boost</span>
                    <span className="text-gray-500">15 songs</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-medium mb-2">Weekly Mood Pattern</h4>
                <div className="flex items-center space-x-1 mb-2">
                  {['😊', '😄', '😐', '😊', '😔', '😌', '😄'].map((emoji, i) => (
                    <span key={i} className="text-lg">{emoji}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600">You tend to feel down on Fridays. Consider planning something fun!</p>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodWellness;
