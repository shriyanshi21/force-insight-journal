
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface JournalEditorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const JournalEditor: React.FC<JournalEditorProps> = ({ selectedDate, onDateChange }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSave = () => {
    if (!title.trim()) {
      toast.error("Please enter a title for your journal entry");
      return;
    }
    
    setIsSaving(true);
    
    // Simulate saving to backend
    setTimeout(() => {
      toast.success("Journal entry saved successfully");
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium text-gray-800">
            {format(selectedDate, "EEEE, MMMM d, yyyy")}
          </h2>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="ml-2 h-8 gap-1 border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              >
                <CalendarIcon className="h-4 w-4 text-force-purple" />
                <span className="sr-only sm:not-sr-only sm:text-xs">Change date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && onDateChange(date)}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-gray-600 border-gray-200"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSaving} 
            size="sm" 
            className="bg-force-purple hover:bg-force-vivid-purple text-white"
          >
            {isSaving ? "Saving..." : "Save Entry"}
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Entry Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="journal-title"
        />
        
        <div className="border-t border-gray-100 pt-4">
          <textarea
            placeholder="Start writing your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="journal-editor"
          />
        </div>
      </div>
    </div>
  );
};

export default JournalEditor;
