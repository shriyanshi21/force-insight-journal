
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  BarChart2, 
  Calendar as CalendarIcon, 
  Settings, 
  Home,
  Menu
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/journal", label: "Journal", icon: BookOpen },
    { path: "/insights", label: "Insights", icon: BarChart2 },
    { path: "/calendar", label: "Calendar", icon: CalendarIcon },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className={cn(
      "bg-white border-r border-gray-200 flex flex-col transition-all duration-300 h-screen",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <Link to="/" className={cn(
          "font-bold text-force-purple transition-all",
          collapsed ? "text-2xl" : "text-2xl"
        )}>
          {collapsed ? "F" : "Force"}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <NavigationMenu orientation="vertical" className="w-full p-2 flex-1">
        <NavigationMenuList className="flex flex-col space-y-1 w-full">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.path} className="w-full">
              <Link 
                to={item.path}
                className={cn(
                  "flex items-center p-2 rounded-lg transition-colors w-full",
                  "hover:bg-force-soft-purple hover:text-force-purple",
                  isActive(item.path) ? "bg-force-soft-purple text-force-purple" : "text-gray-600",
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="p-4 mt-auto border-t border-gray-100">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "space-x-3"
        )}>
          <div className="w-8 h-8 bg-force-soft-purple rounded-full flex items-center justify-center">
            <span className="text-force-purple font-medium">U</span>
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
