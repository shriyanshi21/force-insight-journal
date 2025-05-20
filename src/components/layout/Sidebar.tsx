
import React from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  BarChart2, 
  Calendar as CalendarIcon, 
  Settings, 
  Home 
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-16 md:w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex items-center justify-center md:justify-start">
        <Link to="/" className="font-bold text-2xl text-force-purple">
          <span className="hidden md:inline">Force</span>
          <span className="md:hidden text-2xl">F</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-2">
        <Link to="/" className="flex items-center p-2 rounded-lg text-force-purple hover:bg-force-soft-purple group">
          <Home className="w-5 h-5" />
          <span className="ml-3 hidden md:inline">Dashboard</span>
        </Link>
        
        <Link to="/journal" className="flex items-center p-2 rounded-lg text-force-purple bg-force-soft-purple hover:bg-force-soft-purple group">
          <BookOpen className="w-5 h-5" />
          <span className="ml-3 hidden md:inline">Journal</span>
        </Link>
        
        <Link to="/insights" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-force-soft-purple hover:text-force-purple group">
          <BarChart2 className="w-5 h-5" />
          <span className="ml-3 hidden md:inline">Insights</span>
        </Link>
        
        <Link to="/calendar" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-force-soft-purple hover:text-force-purple group">
          <CalendarIcon className="w-5 h-5" />
          <span className="ml-3 hidden md:inline">Calendar</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <Link to="/settings" className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-force-soft-purple hover:text-force-purple group">
          <Settings className="w-5 h-5" />
          <span className="ml-3 hidden md:inline">Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
