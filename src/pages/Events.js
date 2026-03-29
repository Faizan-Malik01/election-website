import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../AboutPage.css';
import CardSlider from '../components/CardSlider';
import AboutSection from '../components/AboutSection';
import DonateSection from '../components/DonateSection';
import CallUs from '../components/CallUsSection';
import TeamSection from '../components/TeamSection';

const Event = () => {
  return (
    <>
    <section className="about-banner">
      {/* Overlay aur Content ko center karne ke liye container */}
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-white">
        
        {/* Main Title */}
        <h1 className="display-4 fw-bold mb-2">About Us</h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-dot">•</span>
          <span className="breadcrumb-current">About</span>
        </nav>

      </div>
      
    </section>
    <CardSlider/>
    <AboutSection/>
    <DonateSection/>
    <CallUs/>
    <TeamSection/>
    </>
    
  );
};

export default Event;
