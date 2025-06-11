
import React from 'react';
import { Shield, Phone, MapPin, Heart, AlertTriangle, Users, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

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

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'general': return '🚨';
      case 'women': return '👩';
      case 'child': return '👧';
      case 'mental': return '🧠';
      case 'domestic': return '🏠';
      default: return '📞';
    }
  };

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
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone size={24} className="text-red-600" />
                <span>Emergency Helplines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getContactIcon(contact.type)}</span>
                      <div>
                        <div className="font-medium text-gray-800">{contact.name}</div>
                        <div className="text-sm text-gray-600">24/7 Support</div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                      <a href={`tel:${contact.number}`}>{contact.number}</a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart size={24} className="text-purple-600" />
                <span>Your Trusted Contacts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {trustedContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{contact.name}</div>
                        <div className="text-sm text-gray-600">{contact.relation}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={`tel:${contact.phone}`}>Call</a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`sms:${contact.phone}`}>SMS</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <Users size={16} className="mr-2" />
                Add Contact
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin size={24} className="text-purple-600" />
                <span>Location Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium mb-2">Emergency Location Sharing</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Share your location with trusted contacts in emergency situations
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Enable Location Sharing
                  </Button>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium mb-2">Safe Places Near You</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>🏥 Civil Hospital</span>
                      <span className="text-gray-500">0.5 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🚔 Police Station</span>
                      <span className="text-gray-500">0.8 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🏪 24/7 Pharmacy</span>
                      <span className="text-gray-500">0.3 km</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen size={24} className="text-teal-600" />
                <span>Safety Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {safetyResources.map((resource, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{resource.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1">{resource.title}</h4>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                <BookOpen size={16} className="mr-2" />
                View All Resources
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle size={24} className="text-blue-600" />
                <span>Anonymous Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Chat with a Counselor</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    24/7 anonymous chat support for any concerns
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Start Chat
                  </Button>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">Peer Support Groups</h4>
                  <p className="text-sm text-green-700 mb-3">
                    Connect with others who understand your experiences
                  </p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Join Group
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;
