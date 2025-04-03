
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className }) => {
  // Setting a target date 90 days from "now"
  // For the prototype, let's use a fixed date (June 30, 2025)
  const targetDate = new Date('2025-06-30T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // If the countdown is over
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-lg font-semibold mb-3 text-red-600">CRITICAL WINDOW CLOSING IN:</h3>
      <div className="flex justify-center gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold bg-gray-900 text-white px-4 py-3 rounded-md min-w-[70px] md:min-w-[100px]">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <span className="text-sm mt-2">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold bg-gray-900 text-white px-4 py-3 rounded-md min-w-[70px] md:min-w-[100px]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span className="text-sm mt-2">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold bg-gray-900 text-white px-4 py-3 rounded-md min-w-[70px] md:min-w-[100px]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-sm mt-2">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold bg-gray-900 text-white px-4 py-3 rounded-md min-w-[70px] md:min-w-[100px]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <span className="text-sm mt-2">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
