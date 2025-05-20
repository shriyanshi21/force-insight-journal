
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart2, ArrowRight, Mic, Camera, Image } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const DashboardPage: React.FC = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [textResponse, setTextResponse] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  
  const handleNextStep = () => {
    if (onboardingStep === 0 && !textResponse.trim()) {
      toast.error("Please answer the question to continue");
      return;
    }
    
    if (onboardingStep < 2) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      // Complete onboarding
      setIsFirstTime(false);
      toast.success("Welcome to Force! Your journey begins now.");
    }
  };
  
  const handleSkipOnboarding = () => {
    setIsFirstTime(false);
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.info("Recording started...");
    } else {
      toast.success("Audio recorded successfully!");
    }
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast.success("Image uploaded successfully!");
    }
  };

  if (isFirstTime) {
    return (
      <AppLayout className="p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Welcome to Force</h1>
            <p className="text-gray-600">Let's get to know you better</p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-2">
                  {[0, 1, 2].map((step) => (
                    <div 
                      key={step}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        step === onboardingStep ? "w-8 bg-force-purple" : "bg-gray-200"
                      )}
                    />
                  ))}
                </div>
                <Button variant="ghost" size="sm" onClick={handleSkipOnboarding}>
                  Skip
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="pb-8">
              {onboardingStep === 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">What are you hoping to gain from Force?</h2>
                  <Textarea 
                    value={textResponse}
                    onChange={(e) => setTextResponse(e.target.value)}
                    placeholder="I want to improve my..."
                    className="min-h-[150px]"
                  />
                </div>
              )}
              
              {onboardingStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">How are you feeling today?</h2>
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Button 
                      onClick={toggleRecording}
                      size="lg" 
                      className={cn(
                        "h-16 w-16 rounded-full flex items-center justify-center transition-all",
                        isRecording ? "bg-red-500 hover:bg-red-600" : "bg-force-purple hover:bg-force-vivid-purple"
                      )}
                    >
                      <Mic className="h-6 w-6" />
                    </Button>
                    <p className="text-gray-600">{isRecording ? "Recording..." : "Press to record your voice"}</p>
                  </div>
                </div>
              )}
              
              {onboardingStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Take a photo of something you find pretty right now</h2>
                  <div className="flex flex-col items-center gap-4 py-8">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="h-32 w-32 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Camera className="h-8 w-8 text-gray-400" />
                      </div>
                      <Input 
                        id="image-upload" 
                        type="file" 
                        accept="image/*" 
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                    <p className="text-gray-600">Click to upload an image</p>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="pt-0">
              <Button 
                onClick={handleNextStep}
                className="w-full bg-force-purple hover:bg-force-vivid-purple"
              >
                {onboardingStep < 2 ? "Continue" : "Complete"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome to Force</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent interactions with Force</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="bg-force-soft-purple h-10 w-10 rounded-full flex items-center justify-center text-force-purple">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Journal entry added</p>
                    <p className="text-sm text-gray-500">Yesterday at 8:45 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="bg-blue-50 h-10 w-10 rounded-full flex items-center justify-center text-blue-500">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">New insights available</p>
                    <p className="text-sm text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/journal" className="w-full">
                <Button variant="outline" className="w-full">View All Activity</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Start your journaling journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/journal">
                <Button className="w-full bg-force-purple hover:bg-force-vivid-purple flex items-center gap-2 justify-center">
                  <BookOpen className="h-4 w-4" />
                  Write Today's Journal
                </Button>
              </Link>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/insights">
                  <Button variant="outline" className="w-full flex items-center gap-2 justify-center">
                    <BarChart2 className="h-4 w-4" />
                    View Insights
                  </Button>
                </Link>
                <Link to="/calendar">
                  <Button variant="outline" className="w-full flex items-center gap-2 justify-center">
                    <Image className="h-4 w-4" />
                    Media Library
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-force-soft-purple to-purple-100">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-xl font-medium text-gray-800 mb-2">Your Force Assistant</h2>
                <p className="text-gray-700 mb-4">
                  Express yourself through text, voice, and images. Force analyzes your entries to provide personalized insights and support your personal growth journey.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button className="bg-force-purple hover:bg-force-vivid-purple">
                    Daily Check-in
                  </Button>
                  <Button variant="outline" className="bg-white">
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <div className="bg-force-purple h-16 w-16 rounded-full flex items-center justify-center text-white">
                    <span className="text-2xl font-bold">F</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

import { cn } from "@/lib/utils";

export default DashboardPage;
