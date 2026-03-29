import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home.css';
import aboutImg from '../images/AboutSection.jpg'; // Apni image ka path yahan dein

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-img-wrapper">
              <img src={aboutImg} alt="About Us" className="img-fluid rounded-custom" />
            </div>
          </Col>

          {/* Right Side: Content */}
          <Col lg={6} className="ps-lg-5">
            <div className="about-content">
              <h6 className="subtitle text-danger fw-bold mb-3">
                <span className="dash"></span> About Us <span className="dash"></span>
              </h6>
              <h2 className="main-title mb-4">
                We Can Make Our New <br /> Histry Together!
              </h2>
              <p className="description text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras. Tristique semper adipiscing massa placerat dictumst amet, libero vitae. Eget purus blandit velit sit mauris nibh porta. Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo.
              </p>

              {/* Features Icons */}
              <Row>
                <Col xs={6} md={5}>
                  <div className="feature-item text-center">
                    <div className="icon-box-dashed">
                       <i className="fas fa-bullhorn"></i> {/* FontAwesome Icon */}
                    </div>
                    <h6 className="fw-bold mt-3 color-dark-blue">OUR CAMPAIGN</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis qui sapiente,</p>
                  </div>
                </Col>
                <Col xs={6} md={5}>
                  <div className="feature-item text-center">
                    <div className="icon-box-dashed">
                       <i className="fas fa-users"></i> {/* FontAwesome Icon */}
                    </div>
                    <h6 className="fw-bold mt-3 color-dark-blue">BECOME A VOLUNTEER</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis qui sapiente,</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;