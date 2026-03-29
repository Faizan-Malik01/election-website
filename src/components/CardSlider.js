
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home.css";

// Custom Navigation Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </div>
  );
}

const CardSlider = () => {
  const data = [
    { id: 1, title: "BECOME A VOLUNTEER", icon: "🤝", color: "#0d1632" },
    { id: 2, title: "OUR CAMPAIGN", icon: "📢", color: "#dc3545" },
    { id: 3, title: "BECOME A VOLUNTEER", icon: "🤝", color: "#0d1632" },
    { id: 4, title: "NEW PROJECT", icon: "🌟", color: "#dc3545" }, // 4th Card
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop par 3 dikhenge
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 } // Tablet par 2
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 } // Mobile par 1
      }
    ]
  };

  return (
    <div className="container py-5 slider-section">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-3">
            <div className="card text-center p-4 border-0 shadow-sm custom-card">
              <div className="icon-circle mx-auto mb-4" style={{ backgroundColor: item.color }}>
                <span className="icon-text">{item.icon}</span>
              </div>
              <h5 className="fw-bold mb-3">{item.title}</h5>
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