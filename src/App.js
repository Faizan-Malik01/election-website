import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Yeh line check karein
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Mobile menu ke liye
import "./TopHeader.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Footer from "./components/footer.js";
import ElectianNavbar from "./components/Navbar.js";
import HomePage2 from "./pages/HomePage2.js";
import ScrollToTop from "./components/ScrollToTop.js";
// import TopHeader2 from "./components/TopHeader2.js";

function App() {
  return (

    
    <div className="container-fluid p-0"> {/* container typo fixed */}
    {/* <TopHeader2/> */}
      <Router>
        
        <ElectianNavbar/>

          <Routes>    
            <Route path="/" element={<Home />} />
            <Route path="/HomePage2" element={<HomePage2 />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <ScrollToTop/>
          <Footer/>
      </Router>
    </div>

  );
}

export default App;