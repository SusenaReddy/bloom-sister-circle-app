
import React, { useState } from 'react';
import { Calendar, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CycleTrackerProps {
  expanded?: boolean;
}

const CycleTracker = ({ expanded = false }: CycleTrackerProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  
  // Mock data for demonstration - in a real app, this would come from user data
  const cycleData = {
    currentCycleDay: 5,
    periodDays: [20, 21, 22, 23], // Period days this month
    ovulationDay: 6, // Days from now
    fertileDays: [4, 5, 6, 7, 8], // Fertile window
    nextPeriodStart: 15 // Days until next period
  };

  const getCurrentMonthYear = () => {
    return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getDayStatus = (day: number) => {
    if (!day) return 'empty';
    
    if (cycleData.periodDays.includes(day)) return 'period';
    if (cycleData.fertileDays.includes(day)) return 'fertile';
    if (day === 24) return 'ovulation'; // Example ovulation day
    return 'normal';
  };

  const getDayColor = (day: number, status: string) => {
    if (!day) return '';
    
    const today = new Date().getDate();
    const isToday = day === today;
    
    switch (status) {
      case 'period':
        return 'bg-rose-500 text-white';
      case 'fertile':
        return 'bg-purple-400 text-white';
      case 'ovulation':
        return 'bg-purple-600 text-white';
      case 'normal':
        return isToday ? 'bg-white border-2 border-rose-400 text-gray-800' : 'bg-gray-100 text-gray-600';
      default:
        return '';
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between text-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <Calendar size={18} className="text-white" />
            </div>
            <span className="text-lg font-semibold">Period Tracker</span>
          </div>
          <Button size="sm" variant="ghost" className="text-gray-600">
            <Calendar size={16} />
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth('prev')}
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <h3 className="text-xl font-semibold text-gray-800">
            {getCurrentMonthYear()}
          </h3>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth('next')}
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-2">
          {/* Week days header */}
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              const status = getDayStatus(day);
              const colorClass = getDayColor(day, status);
              
              return (
                <button
                  key={index}
                  onClick={() => day && setSelectedDay(day)}
                  disabled={!day}
                  className={`
                    aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                    ${day ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}
                    ${colorClass}
                    ${selectedDay === day ? 'ring-2 ring-purple-300 scale-105' : ''}
                  `}
                >
                  {day && (
                    <span className="relative">
                      {day}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center space-y-2 py-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 bg-teal-500 rounded-sm"></div>
            <span className="text-sm text-gray-600">Regular:</span>
          </div>
          <div className="text-2xl font-bold text-teal-600">
            Day {cycleData.currentCycleDay}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-rose-500 border-rose-300 hover:bg-rose-50"
          >
            Edit period dates
          </Button>
        </div>

        {/* Legend */}
        <div className="flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
            <span className="text-gray-600">Period</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            <span className="text-gray-600">Fertile</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            <span className="text-gray-600">Ovulation</span>
          </div>
        </div>

        {/* Health Insights - only show if expanded or in detailed view */}
        {expanded && (
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-800">Health Insights</h4>
              <Button variant="ghost" size="sm" className="text-rose-500">
                View All
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-rose-50 rounded-lg">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">⚡</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">Iron Levels</h5>
                  <p className="text-sm text-gray-600">Your period starts soon. Consider increasing iron-rich foods to prevent fatigue.</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                <Button variant="ghost" size="sm" className="text-rose-500">
                  View Tips
                </Button>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">🌙</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">Sleep Pattern</h5>
                  <p className="text-sm text-gray-600">Your sleep quality tends to improve after ovulation. Track your patterns.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!expanded && (
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <Plus size={16} className="mr-2" />
            Log Today's Symptoms
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CycleTracker;
