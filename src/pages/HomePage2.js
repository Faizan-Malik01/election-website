import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomePage2.css";
import slide1 from "../images/home2-slide1-img.png"
import slide2 from "../images/home2-slide2-img.png"
import AboutPoliticion from "../components/AboutPoliticion";
import CampaignCards from "../components/CampaignCards";
import EventsSection from "../components/EventsSection";
import CampaignBanner from "../components/CampaignBanner";
import MissionSection from "../components/MissionSection";
import CounterSection from "../components/CounterSection";
import BlogComponent from "../components/BlogSection";

const sliderData = [
  {
    id: 1,
    title: "Let's Make USA",
    subtitle: "Great Again",
    tagline: "WE ARE AWESOME!",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    img: slide1,
  },
  {
    id: 2,
    title: "Build The Future",
    subtitle: "Together Now",
    tagline: "INNOVATION FIRST!",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    img: slide2,
  },
  {
    id: 3,
    title: "Success Starts",
    subtitle: "With Strategy",
    tagline: "GLOBAL VISION!",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
];

const HomePage2 = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  // Animation Variants
  const textVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  const imageVariants = {
    initial: { x: 200, opacity: 0, clipPath: "inset(0 0 0 100%)" },
    animate: { x: 0, opacity: 1, clipPath: "inset(0 0 0 0%)" },
    exit: { x: 200, opacity: 0, clipPath: "inset(0 0 0 100%)" },
  };

  return (
    <>
    <div 
      className="hero-section" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-fluid p-0 h-100 position-relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="slide-container d-flex align-items-center"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6 col-md-8 text-white z-2">
                  <motion.p 
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="tagline fw-bold"
                  >
                    {sliderData[index].tagline}
                  </motion.p>
                  
                  <div className="heading-wrapper overflow-hidden">
                    <motion.h1 
                      variants={textVariants}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="display-3 fw-bold mb-0"
                    >
                      {sliderData[index].title}
                    </motion.h1>
                    <motion.h1 
                      variants={textVariants}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="display-3 fw-bold"
                    >
                      {sliderData[index].subtitle}
                    </motion.h1>
                  </div>

                  <motion.p 
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="lead my-4 desc-text"
                  >
                    {sliderData[index].desc}
                  </motion.p>

                  <motion.div
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <button className="btn-explore">
                      <span>Explore More</span>
                    </button>
                  </motion.div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 d-none d-lg-block">
                  <motion.div 
                    variants={imageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                    className="image-wrapper"
                  >
                    <img 
                      src={sliderData[index].img} 
                      alt="hero" 
                      className="img-fluid hero-img" 
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className={`nav-arrows ${isHovered ? 'visible' : ''}`}>
          <button className="arrow-btn left" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="arrow-btn right" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
    <AboutPoliticion/>
    <CampaignCards/>
    <EventsSection/>
    <CampaignBanner/>
    <MissionSection/>
    <CounterSection/>
    <BlogComponent/>
    </>
  );
};

export default HomePage2;