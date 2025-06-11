
import React, { useState } from 'react';
import { Calendar, Heart, Award, Users, BookOpen, Shield } from 'lucide-react';
import PersonalizedGreeting from './PersonalizedGreeting';
import CycleTracker from './CycleTracker';
import MoodWellness from './MoodWellness';
import WellnessChallenges from './WellnessChallenges';
import CommunitySection from './CommunitySection';
import EducationHub from './EducationHub';
import SafetySection from './SafetySection';
import Navigation from './Navigation';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <PersonalizedGreeting />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CycleTracker />
              <MoodWellness />
            </div>
            <WellnessChallenges />
          </div>
        );
      case 'cycle':
        return <CycleTracker expanded />;
      case 'mood':
        return <MoodWellness expanded />;
      case 'challenges':
        return <WellnessChallenges expanded />;
      case 'community':
        return <CommunitySection />;
      case 'education':
        return <EducationHub />;
      case 'safety':
        return <SafetySection />;
      default:
        return <PersonalizedGreeting />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="flex flex-col lg:flex-row">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-1 p-4 lg:p-8 lg:ml-64">
          <div className="max-w-6xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
