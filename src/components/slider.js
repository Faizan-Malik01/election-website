import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import "../Home.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
function Slider(){
            const slideData = [
    {
      id: 1,
      image: slide1,
      title: "Life Without Liberty, \n As Like Hell.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make."
    },
    {
      id: 2,
      image: slide2,
      title: "Your Voice Matters, \n Join Our Vision.",
      desc: "Helping people to achieve their goals through our campaign and leadership."
    },
    {
      id: 3,
      image: slide3,
      title: "Together We Can \n Change The World.",
      desc: "It is a long established fact that a reader will be distracted by the readable content."
    }
  ];
          return(
                    <div>
      <Carousel fade className="hero-slider" indicators={true} nextLabel="" prevLabel="">
      {slideData.map((slide) => (
        <Carousel.Item key={slide.id} className="slider-item">
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider-img"
            src={slide.image}
            alt={`Slide ${slide.id}`}
          />
          <Carousel.Caption className="d-flex align-items-center">
            <Container>
              <Row>
                <Col md={8} className="text-start">
                  <h1 className="display-3 fw-bold slide-title">
                    {slide.title.split('\n').map((text, index) => (
                      <React.Fragment key={index}>
                        {text} <br />
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="lead mb-4 slide-desc">
                    {slide.desc}
                  </p>
                  <button className="btn-slide-hover-home">JOIN THE CAMPAIGN</button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
                    </div>
          )
}
export default Slider;