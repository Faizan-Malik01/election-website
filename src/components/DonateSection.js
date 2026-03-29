import React from "react";
import "../Home.css";
import DonateImg from "../images/donate.jpg";

const DonateSection = () => {
  const goal = 85000;
  const raised = 74000;
  const progressPercent = (raised / goal) * 100;

  return (
    // "donate-wrapper" ke CSS mein hum background image lagayenge
    <section className="donate-wrapper">
      {/* Background overlay ke liye div */}
      <div className="bg-overlay"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="donate-card shadow-lg">
          
          {/* Corner Ribbon Decorations */}
          <div className="corner-decor top-left"></div>
          <div className="corner-decor bottom-left"></div>

          <div className="row align-items-center g-0">
            {/* Left Image Section (People with Voted stickers) */}
            <div className="col-lg-5 p-4 p-md-5">
              <div className="image-container">
                <img 
                  src={DonateImg} // Yahan apni image lagayein
                  alt="Campaign" 
                  className="img-fluid rounded-3 main-img"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-lg-7 p-4 p-md-5">
              <span className="small-tag">DONATE TODAY!</span>
              <h1 className="campaign-title mt-2 mb-4">
                You Can Contribute Our Last Campaign
              </h1>

              {/* Progress Bar Area */}
              <div className="progress-container mb-4">
                <div className="progress" style={{ height: '12px' }}>
                  <div 
                    className="progress-bar custom-gradient-bar" 
                    role="progressbar" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <div className="d-flex justify-content-between mt-2 stats-text">
                  <p>Goal: <strong>${goal.toLocaleString()}</strong></p>
                  <p>Raised: <strong>${raised.toLocaleString()}</strong></p>
                </div>
              </div>

              {/* Slide Hover Button */}
              <button className="btn-slide-hover">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
                    
          )
}
export default DonateSection;