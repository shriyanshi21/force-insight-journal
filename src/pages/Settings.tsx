
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage: React.FC = () => {
  return (
    <AppLayout className="p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Settings</h1>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="User Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" />
                </div>
              </div>
              
              <Button className="bg-force-purple hover:bg-force-vivid-purple">
                Save Changes
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure how Force communicates with you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications about new insights</p>
                  </div>
                  <div className="h-6 w-10 bg-force-soft-purple rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 bg-force-purple rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Daily Journal Reminders</p>
                    <p className="text-sm text-gray-500">Get reminded to write your daily journal</p>
                  </div>
                  <div className="h-6 w-10 bg-gray-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1/2 -translate-y-1/2 h-4 w-4 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Data</CardTitle>
              <CardDescription>Manage how your data is used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Force uses AI to analyze your journal entries and provide personalized insights.
                Your data is kept private and secure.
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Allow AI Analysis</p>
                  <p className="text-sm text-gray-500">Enable AI to analyze your journal entries</p>
                </div>
                <div className="h-6 w-10 bg-force-soft-purple rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 bg-force-purple rounded-full"></div>
                </div>
              </div>
              
              <Button variant="outline" className="text-red-500 hover:text-red-600">
                Delete All My Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
