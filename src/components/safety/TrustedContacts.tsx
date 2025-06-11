
import React from 'react';
import { Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TrustedContact {
  name: string;
  phone: string;
  relation: string;
}

interface TrustedContactsProps {
  contacts: TrustedContact[];
}

const TrustedContacts = ({ contacts }: TrustedContactsProps) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Heart size={24} className="text-purple-600" />
          <span>Your Trusted Contacts</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          {contacts.map((contact, index) => (
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
  );
};

export default TrustedContacts;
