import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
// Icons import kar rahe hain
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* 1. Top Multi-color Border Strip */}
      <div className="top-border-strip d-flex">
        <div className="strip-item bg-l-blue"></div>
        <div className="strip-item bg-blue"></div>
        <div className="strip-item bg-red"></div>
        <div className="strip-item bg-pink"></div>
        <div className="strip-item bg-l-pink"></div>
      </div>

      <div className="footer-content py-5">
        <div className="container">
          <div className="row g-4">
            
            {/* Column 1: Logo & About */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo mb-4 d-flex align-items-center">
                <div className="logo-icon-box">
                  <div className="inner-gear"></div>
                </div>
                <h2 className="logo-text ms-2 mb-0">Electian<span>.</span></h2>
              </div>
              <p className="about-desc">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, make specimen book.
              </p>
              <div className="social-links mt-4 d-flex gap-2">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaGooglePlusG /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-lg-3 col-md-6 ps-lg-5">
              <h5 className="footer-title">QUICK LINKS:</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog Post</a></li>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Members</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title">CONTACT US</h5>
              <div className="contact-item d-flex mb-3">
                <IoLocationOutline className="c-icon me-3" />
                <p className="mb-0">68D, Belsion Town 2365 <br/> Fna city, LH 3656, USA</p>
              </div>
              <div className="contact-item d-flex mb-3">
                <IoCallOutline className="c-icon me-3" />
                <p className="mb-0">+ 8 (123) 123 456 789 <br/> + 8 (123) 123 456 789</p>
              </div>
              <div className="contact-item d-flex">
                <IoMailOutline className="c-icon me-3" />
                <p className="mb-0">electian@gmail.com</p>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title">NEWSLETTER:</h5>
              <p className="about-desc mb-4">
                Lorem Ipsum has been the industry standard text ever since the printer took.
              </p>
              <div className="newsletter-wrapper">
                <input type="email" placeholder="Enter your email" className="news-input" />
                <button className="news-btn">
                  <FaPaperPlane />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom py-4 text-center">
        <div className="container border-top border-secondary pt-4">
          <p className="mb-0 copy-text">
            Copyright © 2023 Electian by <span className="fw-bold text-white">wpOceans</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;