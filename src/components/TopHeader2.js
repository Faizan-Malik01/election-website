import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa';

const TopHeader2 = () => {
  return (
    <div style={{ backgroundColor: '#0c1228', color: '#fff', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="py-2">
      <Container>
        <Row className="align-items-center">
          
          {/* Contact Info (Left Side) */}
          <Col lg={8} md={12} className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 gap-md-4">
            <div className="d-flex align-items-center">
              <FaPhoneAlt className="me-2 text-secondary" style={{fontSize: '11px'}} />
              <span>Call Us: 548978478</span>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-2 text-secondary" style={{fontSize: '11px'}} />
              <span>demo@example.com</span>
            </div>
            <div className="d-flex align-items-center">
              <FaMapMarkerAlt className="me-2 text-secondary" style={{fontSize: '11px'}} />
              <span>45 Dreem street Austria</span>
            </div>
          </Col>

          {/* Social Links (Right Side) */}
          <Col lg={4} md={12} className="d-flex justify-content-center justify-content-lg-end align-items-center mt-2 mt-lg-0">
            <span className="me-3 opacity-75">Social Address :</span>
            <div className="d-flex gap-3 social-icons">
              <a href="#" style={{ color: '#fff' }}><FaFacebookF /></a>
              <a href="#" style={{ color: '#fff' }}><FaTwitter /></a>
              <a href="#" style={{ color: '#fff' }}><FaInstagram /></a>
              <a href="#" style={{ color: '#fff' }}><FaGooglePlusG /></a>
            </div>
          </Col>

        </Row>
      </Container>
      
      {/* Custom Hover Effect Style */}
      <style>{`
        .social-icons a { transition: 0.3s; opacity: 0.8; }
        .social-icons a:hover { opacity: 1; color: #df0946 !important; transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default TopHeader2;