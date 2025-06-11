
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnonymousSupport = () => {
  return (
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
  );
};

export default AnonymousSupport;
