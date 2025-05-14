
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Calendar } from "lucide-react";

const InsightsPage: React.FC = () => {
  // Sample analysis data (this would come from your AI backend in a real app)
  const emotionData = [
    { emotion: "disappointment", percentage: 19, color: "bg-blue-100 text-blue-700" },
    { emotion: "enthusiasm", percentage: 13, color: "bg-amber-100 text-amber-700" },
    { emotion: "sadness", percentage: 13, color: "bg-blue-100 text-blue-700" },
  ];
  
  const keywords = ["growth", "vulnerability", "uncertainty"];
  
  return (
    <AppLayout className="p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Insights</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium text-gray-800">My reflections</h2>
            <span className="text-gray-500 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              LAST WEEK... DEC 7 - DEC 14
            </span>
          </div>
          
          {/* Emotions Section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {emotionData.map((item) => (
              <div key={item.emotion} className={`${item.color} rounded-lg p-4`}>
                <div className="text-4xl font-bold">{item.percentage}%</div>
                <div className="text-sm">{item.emotion}</div>
              </div>
            ))}
          </div>
          
          {/* Analysis Text */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700">
              You're navigating complex emotions surrounding work, relationships, and personal growth. 
              Your introspection reveals a desire for stability and connection, yet you're wrestling 
              with fears about potential changes and the pain of a past relationship. Despite these 
              challenges, you're showing resilience and self-awareness, recognizing the need for 
              personal development and independence.
            </p>
          </div>
          
          {/* Keywords */}
          <div className="flex gap-4">
            {keywords.map((keyword) => (
              <span key={keyword} className="text-gray-600">
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800">7</h2>
            <div className="ml-4">
              <div className="text-xl font-medium">Moments saved</div>
              <div className="text-gray-500">in the last week</div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-500 uppercase mb-4">Notes to self</h3>
            <ul className="space-y-2">
              <li className="bg-gray-50 p-4 rounded-lg">
                Own everything at work
              </li>
              <li className="border border-dashed border-gray-200 p-4 rounded-lg text-gray-400">
                Add another note...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default InsightsPage;
