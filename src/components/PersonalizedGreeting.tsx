
import React from 'react';
import { Sun, Cloud, Heart, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PersonalizedGreeting = () => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 17 ? 'Good afternoon' : 'Good evening';
  
  return (
    <Card className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 text-white border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{greeting}, Maya! ✨</h2>
            <p className="text-white/90 mb-4">Here's how you're doing today</p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span className="text-sm">Period in 8 days</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={20} />
                <span className="text-sm">Feeling energetic</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-6xl mb-2">☀️</div>
            <p className="text-sm text-white/80">Health forecast: Sunny</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-lg p-3 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">💧</div>
            <p className="text-xs mt-1">4/8 glasses</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">🎯</div>
            <p className="text-xs mt-1">3/5 goals</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">⭐</div>
            <p className="text-xs mt-1">245 points</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedGreeting;
