
import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import EmergencyContacts from './safety/EmergencyContacts';
import TrustedContacts from './safety/TrustedContacts';
import LocationServices from './safety/LocationServices';
import SafetyResources from './safety/SafetyResources';
import AnonymousSupport from './safety/AnonymousSupport';

const SafetySection = () => {
  const emergencyContacts = [
    { name: 'National Emergency', number: '112', type: 'general' },
    { name: 'Women Helpline', number: '1091', type: 'women' },
    { name: 'Child Helpline', number: '1098', type: 'child' },
    { name: 'Mental Health Helpline', number: '9152987821', type: 'mental' },
    { name: 'Domestic Violence', number: '181', type: 'domestic' }
  ];

  const trustedContacts = [
    { name: 'Mom', phone: '+91 98765 43210', relation: 'Mother' },
    { name: 'Dad', phone: '+91 98765 43211', relation: 'Father' },
    { name: 'Priya Didi', phone: '+91 98765 43212', relation: 'Sister' }
  ];

  const safetyResources = [
    {
      title: 'Recognizing Abuse',
      description: 'Learn to identify different types of abuse and manipulation',
      icon: '🚨',
      category: 'awareness'
    },
    {
      title: 'Online Safety',
      description: 'Protect yourself on social media and dating apps',
      icon: '💻',
      category: 'digital'
    },
    {
      title: 'Consent & Boundaries',
      description: 'Understanding your rights and how to communicate boundaries',
      icon: '✋',
      category: 'education'
    },
    {
      title: 'Self-Defense Basics',
      description: 'Basic techniques to protect yourself in dangerous situations',
      icon: '🥋',
      category: 'physical'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Safety & Emergency 🛡️</h1>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          <AlertTriangle size={16} className="mr-2" />
          Emergency SOS
        </Button>
      </div>

      <Alert className="border-red-200 bg-red-50">
        <Shield className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>Remember:</strong> If you're in immediate danger, call 112 or your local emergency number. 
          Your safety is the most important thing.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <EmergencyContacts contacts={emergencyContacts} />
          <TrustedContacts contacts={trustedContacts} />
        </div>

        <div className="space-y-6">
          <LocationServices />
          <SafetyResources resources={safetyResources} />
          <AnonymousSupport />
        </div>
      </div>
    </div>
  );
};

export default SafetySection;
