import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Arrow icon ke liye
import "../ScrollToTop.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Jab user 300px niche scroll karega tab button dikhega
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling ke liye
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed-bottom scroll-to-top" style={{ right: '20px', left: 'auto', bottom: '20px', zIndex: '1000' }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center shadow-lg"
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#a81d39', // Image wala red color
            border: 'none',
            transition: 'opacity 0.3s ease-in-out'
          }}
          title="Go to top"
        >
          <FaArrowUp color="white" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;