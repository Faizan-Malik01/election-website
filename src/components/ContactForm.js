import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../ContactPage.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <Container>
        {/* Header Text */}
        <div className="text-center mb-5 section-header">
          <h2 className="header-title">Have Any Question?</h2>
          <p className="header-subtitle">
            It is a long established fact that a reader will be distracted <br className="d-none d-md-block" />
            content of a page when looking.
          </p>
        </div>

        {/* Form Card */}
        <div className="form-container-wrapper">
          <div className="contact-form-card">
            <Form>
              <Row className="g-4">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Your Name" className="custom-input" />
                </Col>
                <Col md={6}>
                  <Form.Control type="email" placeholder="Your Email" className="custom-input" />
                </Col>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Your phone" className="custom-input" />
                </Col>
                <Col md={6}>
                  <Form.Select className="custom-input custom-select">
                    <option>River Development</option>
                    <option>Political Campaign</option>
                    <option>Donation Issue</option>
                  </Form.Select>
                </Col>
                <Col md={12}>
                  <Form.Control 
                    as="textarea" 
                    rows={6} 
                    placeholder="Message" 
                    className="custom-input textarea-input" 
                  />
                </Col>
              </Row>

              {/* Gradient Submit Button */}
              <div className="text-center button-wrapper">
                <Button type="submit" className="submit-now-btn">
                  Submit Now
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>

      {/* Map Section (Bottom) */}
      <div className="map-wrapper">
        <iframe 
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082187!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;