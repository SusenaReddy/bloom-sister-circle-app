
import React from 'react';
import { Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EmergencyContact {
  name: string;
  number: string;
  type: string;
}

interface EmergencyContactsProps {
  contacts: EmergencyContact[];
}

const EmergencyContacts = ({ contacts }: EmergencyContactsProps) => {
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
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Phone size={24} className="text-red-600" />
          <span>Emergency Helplines</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
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
  );
};

export default EmergencyContacts;
