
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationServices = () => {
  return (
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
  );
};

export default LocationServices;
