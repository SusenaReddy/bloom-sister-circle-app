
import React, { useState } from 'react';
import { Award, Star, Trophy, Target, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface WellnessChallengesProps {
  expanded?: boolean;
}

const WellnessChallenges = ({ expanded = false }: WellnessChallengesProps) => {
  const [challenges, setChallenges] = useState([
    { id: 1, title: 'Drink 8 glasses of water', progress: 50, points: 10, completed: false, icon: '💧' },
    { id: 2, title: 'Sleep 8 hours tonight', progress: 0, points: 15, completed: false, icon: '😴' },
    { id: 3, title: 'Do one kind act', progress: 100, points: 20, completed: true, icon: '💝' },
    { id: 4, title: 'Take 5-minute nature break', progress: 0, points: 10, completed: false, icon: '🌿' },
    { id: 5, title: 'Practice gratitude', progress: 100, points: 15, completed: true, icon: '🙏' },
  ]);

  const totalPoints = 245;
  const todayPoints = challenges.filter(c => c.completed).reduce((sum, c) => sum + c.points, 0);

  const toggleChallenge = (id: number) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id 
        ? { ...challenge, completed: !challenge.completed, progress: challenge.completed ? 0 : 100 }
        : challenge
    ));
  };

  const badges = [
    { name: 'Hydration Hero', icon: '💧', earned: true },
    { name: 'Sleep Champion', icon: '😴', earned: false },
    { name: 'Kindness Queen', icon: '👑', earned: true },
    { name: 'Wellness Warrior', icon: '⚡', earned: true },
    { name: 'Mindful Master', icon: '🧘‍♀️', earned: false },
    { name: 'Health Streak', icon: '🔥', earned: true },
  ];

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-800">
            <Award size={24} className="text-yellow-600" />
            <span>Daily Wellness Challenges</span>
          </div>
          <div className="flex items-center space-x-2 text-right">
            <div className="text-sm text-gray-600">Today: +{todayPoints}</div>
            <div className="flex items-center space-x-1 text-yellow-600">
              <Star size={16} />
              <span className="font-bold">{totalPoints}</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {challenges.slice(0, expanded ? challenges.length : 3).map((challenge) => (
            <div key={challenge.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">{challenge.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`text-sm font-medium ${challenge.completed ? 'text-green-600 line-through' : 'text-gray-800'}`}>
                    {challenge.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-yellow-600">+{challenge.points} pts</span>
                    <button
                      onClick={() => toggleChallenge(challenge.id)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                        ${challenge.completed 
                          ? 'bg-green-500 border-green-500 text-white' 
                          : 'border-gray-300 hover:border-green-400'}
                      `}
                    >
                      {challenge.completed && <span className="text-xs">✓</span>}
                    </button>
                  </div>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-3">Your Badges</h4>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs transition-all
                  ${badge.earned 
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                    : 'bg-gray-100 text-gray-400 border border-gray-200 opacity-50'}
                `}
              >
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {expanded && (
          <div className="space-y-4">
            <Card className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
              <h4 className="font-medium mb-2 flex items-center space-x-2">
                <Trophy size={20} className="text-yellow-600" />
                <span>Weekly Streak: 5 days! 🔥</span>
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                You're on fire! Complete 2 more days to earn the "Weekly Warrior" badge.
              </p>
              <Progress value={71} className="h-3" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5/7 days</span>
                <span>71% complete</span>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="font-medium mb-3">Reward Store</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">🎨 New Avatar</span>
                    <span className="text-xs text-yellow-600">50 pts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">📓 Journal Theme</span>
                    <span className="text-xs text-yellow-600">75 pts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">🎵 Premium Playlist</span>
                    <span className="text-xs text-yellow-600">100 pts</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  Visit Store
                </Button>
              </Card>

              <Card className="p-4">
                <h4 className="font-medium mb-3">This Week's Progress</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Hydration</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sleep</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kindness</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        <Button className="w-full bg-yellow-600 hover:bg-yellow-700 mt-4">
          <Plus size={16} className="mr-2" />
          Add Custom Challenge
        </Button>
      </CardContent>
    </Card>
  );
};

export default WellnessChallenges;
