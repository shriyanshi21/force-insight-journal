
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart2 } from "lucide-react";

const DashboardPage: React.FC = () => {
  return (
    <AppLayout className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome to Force</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm">Yesterday</p>
                <p className="font-medium">You wrote a journal entry</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm">3 days ago</p>
                <p className="font-medium">You received new insights</p>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/journal">
                <Button variant="outline" className="w-full">View All Activity</Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/journal">
                <Button className="w-full bg-force-purple hover:bg-force-vivid-purple flex items-center gap-2 justify-center">
                  <BookOpen className="h-4 w-4" />
                  Write Journal
                </Button>
              </Link>
              <Link to="/insights">
                <Button variant="outline" className="w-full flex items-center gap-2 justify-center">
                  <BarChart2 className="h-4 w-4" />
                  View Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-force-soft-purple rounded-xl p-6 mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Your Force Assistant</h2>
          <p className="text-gray-700 mb-4">
            Write regularly in your journal to get personalized insights and growth recommendations.
            Force uses AI to understand your patterns and provide meaningful guidance.
          </p>
          <Button className="bg-force-purple hover:bg-force-vivid-purple">
            Get Started
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
