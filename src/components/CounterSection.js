import React, { useState, useEffect } from 'react';
import '../HomePage2.css';

// Reusable Counter Component Logic
const AnimatedNumber = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
};

const CounterSection = () => {
  // Data for the stats
  const statsData = [
    { id: 1, target: 25, suffix: "K", title: "AREA COVERAGE" },
    { id: 2, target: 32, suffix: "K", title: "CAMPAIGN DONE" },
    { id: 3, target: 25, suffix: "%", title: "PROJECT DONE" },
    { id: 4, target: 8, suffix: "th", title: "ACTIVE VOLUNTEER" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row justify-content-center">
          {statsData.map((item) => (
            <div key={item.id} className="col-6 col-md-3 stat-item">
              <h2 className="stat-number">
                <AnimatedNumber target={item.target} />
                {item.suffix}
              </h2>
              <p className="stat-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;