
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  LightbulbIcon,
  BarChart2,
  Users,
  MoonStar
} from "lucide-react";

const InsightsPage: React.FC = () => {
  // Sample analysis data (this would come from your AI backend in a real app)
  const emotionData = [
    { emotion: "serenity", percentage: 92, color: "bg-blue-100 text-blue-700" },
    { emotion: "mindfulness", percentage: 90, color: "bg-indigo-100 text-indigo-700" },
  ];
  
  const focusData = [
    { focus: "family bonds", percentage: 94, color: "bg-amber-100 text-amber-700" },
    { focus: "cultural connection", percentage: 90, color: "bg-rose-100 text-rose-700" },
  ];

  return (
    <AppLayout className="p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Insights</h1>
        
        {/* Analysis Summary Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="summary" className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center">
                  <LightbulbIcon className="h-6 w-6 text-force-purple mr-3" />
                  <span className="text-xl font-semibold">Analysis Summary</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p>
                    Based on your voice note from Nainital, your emotional state shows exceptionally high 
                    levels of serenity (92%) and mindfulness (90%). This correlates strongly with your 
                    mentions of nature, the lake, and taking time at your own pace.
                  </p>
                  <p>
                    Your energy is primarily focused on family bonds (94%) and cultural connection (90%), 
                    reflecting the importance of traveling with your mother and reconnecting with India.
                  </p>
                  <p>
                    There's a noticeable pattern of finding balance between calm reflection and planned 
                    activities, suggesting this balance is currently serving your well-being effectively.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Key Growth Insights */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="growth" className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center">
                  <BarChart2 className="h-6 w-6 text-force-purple mr-3" />
                  <span className="text-xl font-semibold">Key Growth Insights</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {emotionData.map((item) => (
                      <div key={item.emotion} className={`${item.color} rounded-lg p-4`}>
                        <div className="text-3xl font-bold">{item.percentage}%</div>
                        <div className="text-sm capitalize">{item.emotion}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Your journal shows significant growth in mindfulness practices and a heightened sense of serenity
                    compared to your previous entries. Continue leveraging these strengths.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Connection Patterns */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="connections" className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-force-purple mr-3" />
                  <span className="text-xl font-semibold">Connection Patterns</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {focusData.map((item) => (
                      <div key={item.focus} className={`${item.color} rounded-lg p-4`}>
                        <div className="text-3xl font-bold">{item.percentage}%</div>
                        <div className="text-sm capitalize">{item.focus}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Your entries show strong emphasis on family relationships and cultural identity.
                    These connections are providing you with stability and purpose during your travels.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Suggested Focus Areas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="focus" className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center">
                  <MoonStar className="h-6 w-6 text-force-purple mr-3" />
                  <span className="text-xl font-semibold">Suggested Focus Areas</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Based on your patterns, consider focusing on:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Maintaining daily mindfulness practices</li>
                    <li>Documenting cultural observations</li>
                    <li>Planning family activities that deepen connections</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Force Insight Box */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-xl font-semibold text-force-purple mb-4">Force Insight</h2>
          <p className="text-force-purple">
            Your entry reveals a deep appreciation for slowing down and embracing cultural roots. To
            build on this growth moment, consider scheduling 10 minutes each morning for mindful
            observation, similar to your lake-watching experience. This could help maintain the
            serenity you've discovered even after returning to your regular routine.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default InsightsPage;
