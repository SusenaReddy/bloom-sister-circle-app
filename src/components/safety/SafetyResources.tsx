
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SafetyResource {
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface SafetyResourcesProps {
  resources: SafetyResource[];
}

const SafetyResources = ({ resources }: SafetyResourcesProps) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen size={24} className="text-teal-600" />
          <span>Safety Resources</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {resources.map((resource, index) => (
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
  );
};

export default SafetyResources;
