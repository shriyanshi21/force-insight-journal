
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import WeekNavigation from "@/components/journal/WeekNavigation";
import JournalEditor from "@/components/journal/JournalEditor";
import JournalAnalysis from "@/components/journal/JournalAnalysis";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JournalPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <AppLayout className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Journal</h1>
          <div className="flex gap-2">
            <span className="text-sm bg-force-soft-purple text-force-purple px-3 py-1 rounded-full">
              Personal
            </span>
          </div>
        </div>
        
        <WeekNavigation
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        
        <div className="mt-6">
          <Tabs defaultValue="write" className="w-full">
            <TabsList className="mb-4 w-full max-w-md">
              <TabsTrigger value="write" className="flex-1">Write Journal</TabsTrigger>
              <TabsTrigger value="analyze" className="flex-1">Analyze</TabsTrigger>
              <TabsTrigger value="media" className="flex-1">Media</TabsTrigger>
            </TabsList>
            
            <TabsContent value="write" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                <JournalEditor 
                  selectedDate={selectedDate} 
                  onDateChange={setSelectedDate}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="analyze" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Insights</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">
                          Your journals this week show a pattern of increased anxiety around work-related topics.
                          Try incorporating some mindfulness practices into your daily routine.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 text-blue-700 rounded-lg p-4">
                          <div className="text-3xl font-bold">25%</div>
                          <div className="text-sm">anxiety</div>
                        </div>
                        <div className="bg-amber-50 text-amber-700 rounded-lg p-4">
                          <div className="text-3xl font-bold">18%</div>
                          <div className="text-sm">excitement</div>
                        </div>
                        <div className="bg-green-50 text-green-700 rounded-lg p-4">
                          <div className="text-3xl font-bold">12%</div>
                          <div className="text-sm">gratitude</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <JournalAnalysis />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="media" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Media Library</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image className="h-8 w-8 text-gray-400" />
                    </div>
                  ))}
                  <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                    <Camera className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Add Media</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

import { Camera, Image } from "lucide-react";

export default JournalPage;
