
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DateRange } from "react-day-picker";

interface JournalAnalysisProps {
  className?: string;
}

const JournalAnalysis: React.FC<JournalAnalysisProps> = ({ className }) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const handleAnalyze = () => {
    if (!dateRange?.from || !dateRange?.to) {
      toast.error("Please select a date range for analysis");
      return;
    }
    
    toast.success("Analysis started! You'll be notified when it's ready.");
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-gray-100 p-6", className)}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">Analyze Your Journals</h3>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Select a date range for analysis:</p>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={1}
          className="rounded-md border"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <Button 
          onClick={handleAnalyze} 
          className="bg-force-purple hover:bg-force-vivid-purple text-white"
        >
          Run Analysis
        </Button>
        <div className="text-xs text-gray-500 mt-2">
          The AI will analyze your journal entries within the selected date range and provide insights about your thoughts and patterns.
        </div>
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";

export default JournalAnalysis;
