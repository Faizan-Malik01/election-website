import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Icons import
import '../ContactPage.css';

const ContactCards = () => {
  const contactData = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: "Address",
      info1: "7 Green Lake Street Crawfordsville,",
      info2: "IN 47933"
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email Us",
      info1: "Election@gmail.com",
      info2: "helloyou@gmail.com"
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      title: "Call Now",
      info1: "+1 800 123 456 789",
      info2: "+1 800 123 654 987"
    }
  ];

  return (
    <section className="contact-cards-section py-5">
      <Container>
        <Row className="g-4 justify-content-center">
          {contactData.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12}>
              <div className="info-card text-center">
                {/* Icon Circle */}
                <div className="icon-circle">
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <h4 className="info-title">{item.title}</h4>
                <div className="info-details">
                  <p>{item.info1}</p>
                  <p>{item.info2}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContactCards;