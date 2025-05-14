
import React from "react";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";

interface WeekNavigationProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const WeekNavigation: React.FC<WeekNavigationProps> = ({ 
  selectedDate, 
  onDateChange 
}) => {
  // Get the first day of the week (Sunday)
  const startOfTheWeek = startOfWeek(selectedDate);
  
  // Generate an array of the 7 days of the week
  const weekDays = Array.from({ length: 7 }).map((_, index) => {
    const day = addDays(startOfTheWeek, index);
    return {
      date: day,
      dayName: format(day, "EEE"),
      dayNumber: format(day, "d"),
      isActive: isSameDay(day, selectedDate)
    };
  });

  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500 mb-2">
        {format(startOfTheWeek, "MMMM d")} - {format(addDays(startOfTheWeek, 6), "MMMM d, yyyy")}
      </div>
      <div className="flex justify-between space-x-2 overflow-x-auto">
        {weekDays.map((day) => (
          <button
            key={day.date.toString()}
            onClick={() => onDateChange(day.date)}
            className={`day-nav-item flex-1 ${day.isActive ? 'active' : ''}`}
          >
            <div className="text-xs">{day.dayName}</div>
            <div className="text-lg">{day.dayNumber}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeekNavigation;
