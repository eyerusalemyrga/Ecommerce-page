"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MusicBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
   <div className="w-full rounded-lg overflow-hidden shadow-lg bg-black flex items-center justify-between px-50 py-12 mt-12">
      {}
      <div className="flex flex-col justify-center gap-4">
        <span className="text-green-400 font-semibold text-xs mb-2">Categories</span>
        <h2 className="text-white text-3xl font-bold mb-2 leading-tight">
          Enhance Your<br />Music Experience
        </h2>
        <div className="flex gap-3 mb-4">
          {[
            { label: "Hours", value: hours },
            { label: "Days", value: days },
            { label: "Minutes", value: minutes },
            { label: "Seconds", value: seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-white w-14 h-14 rounded-full justify-center"
            >
              <span className="text-black font-bold text-lg">{String(item.value).padStart(2, "0")}</span>
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
        <button className="bg-green-400 hover:bg-green-500 text-white px-8 py-2 rounded font-semibold shadow w-max">
          Buy Now!
        </button>
      </div>
      {}
      <div className="flex-shrink-0 ml-2">
        <Image
          src="/images/speaker.jpg"
          alt="Music Speaker"
          width={520}
          height={380}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}