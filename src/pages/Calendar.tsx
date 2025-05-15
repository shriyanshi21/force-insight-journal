
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <AppLayout className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Journal Calendar</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
              <CardDescription>Choose a date to view or create journal entries</CardDescription>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{date ? date.toDateString() : "No date selected"}</CardTitle>
              <CardDescription>Journal activity for this date</CardDescription>
            </CardHeader>
            <CardContent>
              {date ? (
                <div className="space-y-4">
                  <div className="p-4 bg-force-soft-purple rounded-lg">
                    <p className="font-medium text-force-purple">Journal entry exists for this date</p>
                    <p className="text-sm text-gray-600 mt-1">Last edited at 2:30 PM</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-force-purple text-white rounded-lg hover:bg-force-vivid-purple transition-colors">
                      View Entry
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                      Create New
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                  <p>Select a date to view or create entries</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default CalendarPage;
