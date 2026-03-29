import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import Medical from "../images/medicalsystem.jpg";
import ResidentialArea from "../images/residential-area.jpg";
import TrafficJam from "../images/traffic-jam.jpg"
import EconomicZone from "../images/economic-zone.jpg";
import FoodSefty from "../images/food.jpg";
import ForeignPolicye from "../images/passport.jpg"

const MissionSection = () => {
  const cardData = [
    { id: 1, title: "MEDICAL SYSTEM", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: Medical},
    { id: 2, title: "RESIDENTIAL AREA", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: ResidentialArea },
    { id: 3, title: "TRAFFIC JAM", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: TrafficJam },
    { id: 4, title: "ECONOMIC ZONE", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: EconomicZone },
    { id: 5, title: "EDUCATION HUB", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: FoodSefty },
    { id: 6, title: "GREEN PARK", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img:  ForeignPolicye },
    { id: 7, title: "SMART CITY", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=500" },
    { id: 8, title: "TOURISM SPOT", desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500" },
  ];

  return (
    <section className="mission-wrapper py-5">
      {/* Subtitle aur Heading Section */}
      <div className="container text-center mb-5">
        <div className="subtitle-container">
          <span className="subtitle">&mdash; Our Mission & Vission &mdash;</span>
        </div>
        <h1 className="main-heading mt-2">We Can Make Solution Everything <br className="d-none d-md-block" /> To Our Demand.</h1>
      </div>

      <div className="container">
        <div className="row g-4">
          {cardData.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
              <div className="mission-card">
                <div className="card-bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="hover-overlay"></div>

                <div className="card-body-content">
                  {/* Text jo niche se upar slide hota hai */}
                  <div className="hover-info">
                    <h4 className="title-text">{item.title}</h4>
                    <p className="desc-text">{item.desc}</p>
                  </div>

                  {/* Button jo left ko slide hoke gayab hota hai */}
                  <div className="static-button">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;