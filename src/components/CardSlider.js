import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Home.css";

// --- NEXT ARROW FUNCTION ---
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  );
}

// --- PREV ARROW FUNCTION ---
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </div>
  );
}

const CardSlider = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { id: 1, title: "BECOME A VOLUNTEER", icon: "🤝", color: "#0d1632" },
    { id: 2, title: "OUR CAMPAIGN", icon: "📢", color: "#dc3545" },
    { id: 3, title: "BECOME A VOLUNTEER", icon: "🤝", color: "#0d1632" },
    { id: 4, title: "NEW PROJECT", icon: "🌟", color: "#dc3545" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : (width < 1024 ? 2 : 3),
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
    arrows: width > 768, 
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="container py-5 slider-section">
      <Slider key={width < 768 ? "mobile-view" : "desktop-view"} {...settings}>
        {data.map((item) => (
          <div key={item.id} className="card-wrapper"> 
            <div className="card text-center p-4 border-0 shadow-sm custom-card">
              <div className="icon-circle mx-auto mb-4" style={{ backgroundColor: item.color }}>
                <span className="icon-text">{item.icon}</span>
              </div>
              <h5 className="fw-bold mb-3 card-title">{item.title}</h5>
              <p className="text-muted px-2">
                Lorem Ipsum is simply dummy text the industry's standard dummy text ever scrambled type specimen.
              </p>
              <button className="btn btn-outline-danger mt-3 details-btn">DETAILS</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;