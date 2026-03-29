import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ContactPage.css';
import ContactCards from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

const ContactBanner = () => {
  return (
          <>
    <section className="contact-banner">
      {/* Background Overlay */}
      <div className="banner-overlay"></div>
      
      <Container className="position-relative z-index-1">
        <div className="text-center text-white">
          {/* Main Title */}
          <h1 className="banner-title">Contact Us</h1>
          
          {/* Breadcrumb Navigation */}
          <div className="banner-breadcrumb">
            <Link to="/" className="breadcrumb-item-link">Home</Link>
            <span className="breadcrumb-separator">•</span>
            <span className="breadcrumb-current">Contact</span>
          </div>
        </div>
      </Container>
    </section>
    <ContactCards/>
    <ContactForm/>
    </>
  );
};

export default ContactBanner;