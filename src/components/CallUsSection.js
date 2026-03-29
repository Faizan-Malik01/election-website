import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../AboutPage.css';

const CallUs = () => {
  return (
    <section className="call-us-section">
      <Container>
        <div className="call-us-box">
          {/* Left Red Shape Design */}
          <div className="red-wave-shape"></div>

          <Row className="align-items-center position-relative px-4 py-5 px-lg-5">
            {/* Text Content */}
            <Col lg={8} md={12} className="text-content">
              <h6 className="sub-title">WE ARE HERE</h6>
              <h2 className="main-title">
                Let's fight with all injustice and <br className="d-none d-md-block" /> corruption.
              </h2>
            </Col>

            {/* Button */}
            <Col lg={4} md={12} className="text-lg-end text-center mt-4 mt-lg-0">
              <Button className="call-us-btn">
                CALL US
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CallUs;