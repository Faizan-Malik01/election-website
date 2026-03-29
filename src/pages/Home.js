import AboutSection from "../components/AboutSection.js";
import BlogSection from "../components/BlogSection.js";
import CardSlider from "../components/CardSlider.js";
import DonateSection from "../components/DonateSection.js";
import EventsSection from "../components/EventsSection.js";
import MissionSection from "../components/MissionSection.js";
import Slider from "../components/slider.js";
// import TopHeader from "../components/TopHeader.js"; 
function Home() {
  return(
       <>
       <div className="Home-section">
        {/* <TopHeader/> */}
        <Slider />
        <CardSlider/>
        <AboutSection/>
        <DonateSection/>
        <MissionSection/>
        <EventsSection/>
        <BlogSection/>
       </div>


       </>
  )
}
export default Home;

















// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import slide1 from "../images/slide1.jpg"
// import slide2 from "../images/slide2.jpg"
// import slide3 from "../images/slide3.jpg"
// import leftimage from "../images/left-image.jpg"
// import donateImg from "../images/donate.jpg"
// import bgImg from "../images/donate-bg.jpg"
// import medical from "../images/medicalsystem.jpg"
// import residential from "../images/residential-area.jpg"
// import economic from "../images/economic-zone.jpg"
// import traffic from "../images/traffic-jam.jpg"
// import food from "../images/food.jpg"
// import passport from "../images/passport.jpg"
// import education from "../images/eduction.jpg"
// import family from "../images/family.jpg"
// import passage from "../images/passage.jpg"
// import strategically from "../images/strategically.jpg"
// import political from "../images/political.jpg"
// import august from "../images/august.jpg"
// import march from "../images/march.jpg"
// import sep from "../images/sep.jpg"
// import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const data = [
//   { title: "BECOME A VOLUNTEER", text: "Lorem Ipsum is simply dummy text...", color: "#0b1a4a", icon: "👥" },
//   { title: "OUR CAMPAIGN", text: "Lorem Ipsum is simply dummy text...", color: "#e11d48", icon: "📢" },
//   { title: "BECOME A VOLUNTEER", text: "Lorem Ipsum is simply dummy text...", color: "#0b1a4a", icon: "👥" },
//   { title: "OUR CAMPAIGN", text: "Lorem Ipsum is simply dummy text...", color: "#e11d48", icon: "📢" },
//   { title: "BECOME A VOLUNTEER", text: "Lorem Ipsum is simply dummy text...", color: "#0b1a4a", icon: "👥" },
// ];

// const cards = [
//   {
//     title: "MEDICAL SYSTEM",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: medical,
//   },
//   {
//     title: "RESIDENTIAL AREA",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: residential,
//   },
//   {
//     title: "TRAFFIC JAM",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: traffic,
//   },
//   {
//     title: "ECONOMIC ZONE",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: economic,
//   },
//   {
//     title: "FOOD SAFETY",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: food,
//   },
//   {
//     title: "FOREIGN POLICY",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: passport,
//   },
//   {
//     title: "EDUCATION SYSTEM",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: education,
//   },
//   {
//     title: "FAMILY SAFETY",
//     desc: "Lorem Ipsum has been the industry's standard dummy text.",
//     img: family,
//   },
// ];

// const events = [
//   {
//     title: "Letraset Sheets Passage And Recently.",
//     img: passage,
//     date: "July 1, 2023",
//     time: "15:00 - 19:00",
//   },
//   {
//     title: "The Best Strategically Build Your Business Earning",
//     img: strategically,
//     date: "July 2, 2023",
//     time: "10:00 - 15:00",
//   },
//   {
//     title: "Political Commitment For Your Deportation Issue",
//     img: political,
//     date: "July 5, 2023",
//     time: "13:00 - 16:00",
//   },
// ];

// // blog erae
// const blogs = [
//   {
//     title: "Letraset Sheets Passage And Recently.",
//     desc: "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
//     img: august,
//     date: "28",
//     month: "August",
//   },
//   {
//     title: "Politics Is Why We Can’t Have Nice Things.",
//     desc: "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
//     img: march,
//     date: "25",
//     month: "March",
//   },
//   {
//     title: "Liberty Divided Over Criticism Justice League",
//     desc: "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.",
//     img: sep,
//     date: "23",
//     month: "Sep",
//   },
// ];

// function Home() {

//   const [start, setStart] = useState(0);
//   const visible = 3;

//   const prev = () => {
//     setStart(start - visible < 0 ? 0 : start - visible);
//   };

//   const next = () => {
//     setStart(start + visible >= data.length ? 0 : start + visible);
//   };

//   const currentCards = data.slice(start, start + visible);
//     const goal = 85000;
//   const raised = 74000;
//   const percent = Math.min((raised / goal) * 100, 100);
//   return (
//     <div>
//            <div id="carouselExampleIndicators" className="carousel slide">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active carousel-1">
//       <img src={slide1} className="d-block w-100" alt="..."/>
//        <div class="carousel-caption d-none d-md-block">
//         <h1 className="heading">Life Without Liberty <br></br> As Like Hell</h1>
//         <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia et 
//           <br></br>temporibus sint maiores perspiciatis!</p>
//           <button type="button" class="btn-join">JOIN THE CAMPAIGN</button>
//       </div>
//     </div>
//     <div className="carousel-item carousel-1">
//       <img src={slide2} className="d-block w-100" alt="..."/>
//              <div class="carousel-caption d-none d-md-block">
//         <h1 className="heading">Life Without Liberty <br></br> As Like Hell</h1>
//         <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia et 
//           <br></br>temporibus sint maiores perspiciatis!</p>
//           <button type="button" class="btn btn-join">JOIN THE CAMPAIGN</button>
//       </div>
//     </div>
//     <div className="carousel-item carousel-1">
//       <img src={slide3} className="d-block w-100" alt="..."/>
//              <div class="carousel-caption d-none d-md-block">
//         <h1 className="heading">Life Without Liberty <br></br> As Like Hell</h1>
//         <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia et 
//           <br></br>temporibus sint maiores perspiciatis!</p>
//           <button type="button" class="btn btn-join">JOIN THE CAMPAIGN</button>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//        {/* card area start */}
//     <div className="container py-5 position-relative">
//       <button className="nav-btn left" onClick={prev}>
//         <FaArrowLeft />
//       </button>

//       <div className="row g-4 justify-content-center">
//         {currentCards.map((item, i) => (
//           <div className="col-12 col-md-6 col-lg-4" key={i}>
//             <div className="custom-card text-center shadow h-100">
//               <div
//                 className="icon-circle mx-auto mb-4"
//                 style={{ background: item.color }}
//               >
//                 <span>{item.icon}</span>
//               </div>

//               <h5 className="fw-bold">{item.title}</h5>
//               <p className="text-muted">{item.text}</p>

//               <button className="btn btn-outline-danger mt-2">
//                 DETAILS
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="nav-btn right" onClick={next}>
//         <FaArrowRight />
//       </button>
//     </div>

//         <section className="about-section py-5">
//       <div className="container">
//         <div className="row align-items-center g-4">
          
//           {/* Left Image */}
//           <div className="col-lg-6">
//             <img
//               src={leftimage}
//               alt="about"
//               className="img-fluid rounded-4 about-img"
//             />
//           </div>

//           {/* Right Content */}
//           <div className="right-content col-lg-6">
//             <span className="about-tag">– About Us –</span>

//             <h1 className="about-title mt-3">
//               We Can Make Our New <br /> History Together!
//             </h1>

//             <ol><p className="about-text mt-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras. Tristique semper adipiscing massa placerat dictumst amet, libero vitae. Eget purus blandit velit sit mauris nibh porta. Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo,
//             </p></ol>

//             <ol><p className="about-text mt-3">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras. Tristique semper adipiscing massa placerat dictumst amet, libero vitae. Eget purus blandit velit sit mauris nibh porta. Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo,
//             </p></ol>

//             <div className="row mt-4">
//               <div className="col-6 text-center">
//                 <div className="icon-box mx-auto al">
//                   <i className="bi bi-megaphone-fill fa-solid fa-user"></i>
//                 </div>
//                 <h6 className="mt-3">OUR CAMPAIGN</h6>
//                 <p>Standard dummy of the text ever the
//                   <br />
//                    scrambled it to make.</p>
//               </div>

//               <div className="col-6 text-center">
//                 <div className="icon-box mx-auto">
//                   <i className="bi bi-people-fill fa-solid fa-bullhorn"></i>
//                 </div>
//                 <h6 className="mt-3">BECOME A VOLUNTEER</h6>
//                 <p>Standard dummy of the text ever the
//                   <br />
//                    scrambled it to make.</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//                       {/* donate-section */}
//        <section
//       className="donate-section py-5"
//       style={{ backgroundImage: `url(${bgImg})` }}
//     >
//       <div className="overlay"></div>

//       <div className="container position-relative">
//         <div className="donate-card p-4 p-lg-5">
//           <div className="row align-items-center g-4">

//             {/* Left Image */}
//             <div className="col-lg-5">
//               <img
//                 src={donateImg}
//                 alt="donate"
//                 className="img-fluid rounded-4 donate-img"
//               />
//             </div>

//             {/* Right Content */}
//             <div className="col-lg-7">
//               <span className="donate-tag">DONATE TODAY!</span>

//               <h2 className="donate-title mt-2">
//                 You Can Contribute Our Last Campaign
//               </h2>

//               {/* Progress Bar */}
//               <div className="progress donate-progress mt-4">
//                 <div
//                   className="progress-bar donate-progress-bar"
//                   style={{ width: `${percent}%` }}
//                 />
//               </div>

//               <div className="d-flex justify-content-between mt-2 donate-amounts">
//                 <span>
//                   Goal: <strong>${goal.toLocaleString()}</strong>
//                 </span>
//                 <span>
//                   Raised: <strong>${raised.toLocaleString()}</strong>
//                 </span>
//               </div>

//               <button className="btn donate-btn mt-4">
//                 DONATE NOW
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>

//     {/* card-section */}

//     <section className="mission-section py-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <span className="mission-tag">– Our Mission & Vision –</span>
//           <h2 className="mission-title mt-2">
//             We Can Make Solution Everything <br /> To Our Demand.
//           </h2>
//         </div>

//         <div className="row g-4">
//           {cards.map((item, i) => (
//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={i}>
//               <div className="mission-card">
//                 <img src={item.img} alt={item.title} />

//                 {/* Overlay */}
//                 <div className="mission-overlay"></div>

//                 {/* Bottom se aane wala text */}
//                 <div className="mission-hover-content">
//                   <h5>{item.title}</h5>
//                   <p>{item.desc}</p>
//                 </div>

//                 {/* Bottom Button */}
//                 <div className="mission-content">
//                   <button className="mission-btn">{item.title}</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//             <div className="container my-5 events-wrap">
//       <div className="row align-items-start">
//         {/* Left text */}
//         <div className="col-lg-4 mb-4">
//           <p className="ev-sub">— Our Event’s —</p>
//           <h2 className="ev-title">
//             You Can Attend <br /> Our Upcoming Events
//           </h2>
//           <div className="ev-bar"></div>
//         </div>

//         {/* Right 3 cards */}
//         <div className="col-lg-8">
//           <div className="row g-4">
//             {events.map((e, i) => (
//               <div className="col-md-4" key={i}>
//                 <div className="ev-card">
//                   <div className="ev-img">
//                     <img src={e.img} alt={e.title} />
//                   </div>
//                   <div className="ev-body">
//                     <p className="ev-loc">📍 Cirantam’s, Shiloh, Hawaii 8062, USA.</p>
//                     <h6>{e.title}</h6>
//                     <div className="ev-meta">
//                       <span>📅 {e.date}</span>
//                       <span>⏰ {e.time}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* blog area */}
//     <div className="container my-5 blog-wrap">
//       <div className="text-center mb-5">
//         <p className="blog-sub">— Blog Post —</p>
//         <h2 className="blog-title">Awesome Blog Post & Article.</h2>
//       </div>

//       <div className="row g-4">
//         {blogs.map((b, i) => (
//           <div className="col-md-4" key={i}>
//             <div className="blog-card">
//               <div className="blog-img">
//                 <img src={b.img} alt={b.title} />
//                 <div className="blog-date">
//                   <span className="d">{b.date}</span>
//                   <span className="m">{b.month}</span>
//                 </div>
//               </div>

//               <div className="blog-body">
//                 <h5>{b.title}</h5>
//                 <p>{b.desc}</p>
//                 <a href="#" className="blog-btn">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Home;
