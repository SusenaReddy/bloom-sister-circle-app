
import React from 'react';
import { Home, Calendar, Heart, Award, Users, BookOpen, Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'cycle', label: 'Cycle Tracker', icon: Calendar },
    { id: 'mood', label: 'Mood & Wellness', icon: Heart },
    { id: 'challenges', label: 'Challenges', icon: Award },
    { id: 'community', label: 'Sister Circle', icon: Users },
    { id: 'education', label: 'Learn', icon: BookOpen },
    { id: 'safety', label: 'Safety', icon: Shield },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/80 backdrop-blur-sm"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full bg-white/90 backdrop-blur-md border-r border-purple-100 
        w-64 transform transition-transform duration-300 ease-in-out z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full flex items-center justify-center">
              <Heart size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">DidiCare</h1>
              <p className="text-sm text-gray-600">Your wellness companion</p>
            </div>
          </div>

          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                      ${activeSection === item.id 
                        ? 'bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'}
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
