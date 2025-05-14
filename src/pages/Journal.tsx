
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import WeekNavigation from "@/components/journal/WeekNavigation";
import JournalEditor from "@/components/journal/JournalEditor";
import JournalAnalysis from "@/components/journal/JournalAnalysis";

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <JournalEditor 
              selectedDate={selectedDate} 
              onDateChange={setSelectedDate}
            />
          </div>
          
          <div className="lg:col-span-1">
            <JournalAnalysis />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default JournalPage;
