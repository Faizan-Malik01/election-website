import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../AboutPage.css';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Robert Johnson", role: "Admin", img: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6nnU33awUD87mAVQqaPBuyStm.jpg" },
    { id: 2, name: "Robert Johnson", role: "Admin", img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-concept-close-up-confident-young-woman-red-lipst_1258-58832.jpg" },
    { id: 3, name: "Robert Johnson", role: "Admin", img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" },
    { id: 4, name: "Robert Johnson", role: "Admin", img: "https://img.freepik.com/free-photo/confident-businesswoman-with-arms-crossed-standing-against-white-background_23-2148002275.jpg" },
  ];

  return (
    <section className="team-section">
      <Container>
        {/* Top Header Text */}
        <div className="text-center mb-5">
          <h6 className="team-subtitle">— TEAM MEMBERS —</h6>
          <h2 className="team-title">Campaign Staff</h2>
        </div>

        <Row className="justify-content-center">
          {teamMembers.map((member) => (
            <Col key={member.id} lg={3} md={6} sm={12} className="mb-4 d-flex justify-content-center">
              <div className="team-card">
                <div className="image-wrapper-card">
                  <img src={member.img} alt={member.name} className="img-fluid" />
                  
                  {/* Hover Overlay Content */}
                  <div className="team-overlay">
                    <p className="member-role">{member.role}</p>
                    <h4 className="member-name">{member.name}</h4>
                    <div className="plus-icon">
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;