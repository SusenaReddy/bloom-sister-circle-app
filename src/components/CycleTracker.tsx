
import React, { useState } from 'react';
import { Calendar, Plus, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CycleTrackerProps {
  expanded?: boolean;
}

const CycleTracker = ({ expanded = false }: CycleTrackerProps) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  
  const cycleData = [
    { day: 1, status: 'period', mood: '😐' },
    { day: 2, status: 'period', mood: '😔' },
    { day: 3, status: 'period', mood: '😌' },
    { day: 4, status: 'normal', mood: '😊' },
    { day: 5, status: 'normal', mood: '😄' },
    { day: 6, status: 'normal', mood: '😊' },
    { day: 7, status: 'normal', mood: '😌' },
    { day: 8, status: 'normal', mood: '😊' },
    { day: 9, status: 'normal', mood: '😄' },
    { day: 10, status: 'normal', mood: '😊' },
    { day: 11, status: 'fertile', mood: '😍' },
    { day: 12, status: 'fertile', mood: '😊' },
    { day: 13, status: 'ovulation', mood: '😌' },
    { day: 14, status: 'fertile', mood: '😊' },
    { day: 15, status: 'normal', mood: '😊' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'period': return 'bg-red-400';
      case 'fertile': return 'bg-green-400';
      case 'ovulation': return 'bg-blue-400';
      default: return 'bg-gray-200';
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <Calendar size={24} className="text-purple-600" />
          <span>Cycle & Mood Tracker</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
          
          {cycleData.map((item) => (
            <button
              key={item.day}
              onClick={() => setSelectedDay(item.day)}
              className={`
                aspect-square rounded-lg flex flex-col items-center justify-center text-sm transition-all
                ${getStatusColor(item.status)} 
                ${selectedDay === item.day ? 'ring-2 ring-purple-400 scale-105' : 'hover:scale-105'}
              `}
            >
              <span className="font-medium text-white">{item.day}</span>
              <span className="text-xs">{item.mood}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span>Period</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Fertile</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Ovulation</span>
            </div>
          </div>
          
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Plus size={16} className="mr-1" />
            Log Today
          </Button>
        </div>

        {expanded && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="font-medium mb-2">Symptoms Today</h4>
                <div className="space-y-2">
                  {['💧 Light flow', '😴 Mild fatigue', '💭 Clear thinking'].map((symptom) => (
                    <div key={symptom} className="text-sm text-gray-600">{symptom}</div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-medium mb-2">Insights</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Your energy peaks around day 9-11</p>
                  <p className="text-sm text-gray-600">Mood dips 2 days before period</p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CycleTracker;
