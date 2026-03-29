import React, { useState, useEffect } from 'react';
import '../HomePage2.css'; // CSS file import karna na bhoolein

const CampaignBanner = () => {
  // Target Date set karein (Is date se ulta ginte huye negative numbers aayenge)
  const targetDate = "2023-12-31T08:00:00"; 

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      
      // logic for calculating days, hours, etc.
      // Math.abs ka use karke hum image ki tarah negative values dikhayenge
      const isPast = difference < 0;
      const absDiff = Math.abs(difference);

      setTimeLeft({
        days: (isPast ? -1 : 1) * Math.floor(absDiff / (1000 * 60 * 60 * 24)),
        hours: (isPast ? -1 : 1) * Math.floor((absDiff / (1000 * 60 * 60)) % 24),
        minutes: (isPast ? -1 : 1) * Math.floor((absDiff / 1000 / 60) % 60),
        seconds: (isPast ? -1 : 1) * Math.floor((absDiff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="campaign-section">
      <div className="container">
        
        {/* Label Section */}
        <div className="campaign-label">
          Campaign Events
        </div>
        
        {/* Heading Section */}
        <h1 className="main-heading">
          Its Beginning! Aberdeen, <br /> Aberdeen City, Uk
        </h1>
        
        {/* Time Text */}
        <p className="time-slot">
          08:00 AM - 05:00 PM
        </p>

        {/* Live Timer Section */}
        <div className="timer-container">
          <div className="time-box">
            <h2>{timeLeft.days}</h2>
            <span>Days</span>
          </div>
          
          <div className="time-box">
            <h2>{timeLeft.hours}</h2>
            <span>Hours</span>
          </div>
          
          <div className="time-box">
            <h2>{timeLeft.minutes}</h2>
            <span>Min</span>
          </div>
          
          <div className="time-box">
            <h2>{timeLeft.seconds}</h2>
            <span>Sec</span>
          </div>
        </div>

      </div>
      
      {/* Scroll Top Button ko yahan se hata diya gaya hai */}
    </section>
  );
};

export default CampaignBanner;