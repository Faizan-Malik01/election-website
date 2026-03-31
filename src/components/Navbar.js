// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import "../Navbar.css"; // Path check kar lena sahi hai ya nahi

// function Navbar() {
//   return (
//      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
//       <div className="container-fluid px-lg-5">
        
//         {/* Logo Section */}
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <div className="logo-icon-container me-2">
//             {/* Ye CSS se banaya hua logo icon hai */}
//             <div className="outer-gear">
//               <div className="inner-target">
//                 <div className="red-dot"></div>
//               </div>
//             </div>
//           </div>
//           <span className="logo-text">Electian.</span>
//         </Link>

//         {/* Mobile Toggle Button */}
//         <button 
//           className="navbar-toggler border-0 shadow-none" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#electianNav"
//           aria-controls="electianNav" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Menu */}
//         <div className="collapse navbar-collapse" id="electianNav">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item px-lg-2">
//               <NavLink className="nav-link text-uppercase" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item px-lg-2">
//               <NavLink className="nav-link text-uppercase" to="/about">About Us</NavLink>
//             </li>
//             <li className="nav-item px-lg-2">
//               <NavLink className="nav-link text-uppercase" to="/events">Events</NavLink>
//             </li>
//             <li className="nav-item px-lg-2">
//               <NavLink className="nav-link text-uppercase" to="/pages">Pages</NavLink>
//             </li>
//             <li className="nav-item px-lg-2">
//               <NavLink className="nav-link text-uppercase" to="/blog">Blog</NavLink>
//             </li>
//             <li className="nav-item px-lg-2">
//               <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
//             </li>
//           </ul>

//           {/* Donation Button with Gradient */}
//           <div className="d-flex align-items-center mt-3 mt-lg-0">
//             <Link to="/donate" className="btn donate-btn text-uppercase fw-bold">
//               Make Donation
//             </Link>
//           </div>
//         </div>

//       </div>
//     </nav>

//   );
// }
// export default Navbar;


import React, { useState, useEffect } from 'react'; 
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../Navbar.css';

function ElectianNavbar(){
  const [showHome, setShowHome] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  // Scroll logic: 50px scroll hone par 'scrolled' state true hogi
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-navbar sticky-top"
     collapseOnSelect 
      expand="lg" 
      variant="dark" 
      className={`custom-navbar fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container className='Navbar-style'>
        {/* Logo Section */}
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center logo-text">
            <div className="logo-icon">
              <div className="inner-circle"></div>
            </div>
            Electian<span>.</span>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto mt-2 mt-lg-0">
            
            {/* HOME Dropdown with Hover logic */}
            <div 
              onMouseEnter={() => setShowHome(true)} 
              onMouseLeave={() => setShowHome(false)}
              className="nav-dropdown-wrapper"
            >
              <LinkContainer to="/">
                <Nav.Link className="nav-item-custom">HOME</Nav.Link>
              </LinkContainer>
              <NavDropdown show={showHome} className="custom-dropdown-menu">
                <LinkContainer to="/"><NavDropdown.Item>HOME STYLE 1</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/HomePage2"><NavDropdown.Item>HOME STYLE 2</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </div>

            <LinkContainer to="/about">
              <Nav.Link className="nav-item-custom">ABOUT US</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/events">
              <Nav.Link className="nav-item-custom">EVENTS</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/pages">
              <Nav.Link className="nav-item-custom">PAGES</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link className="nav-item-custom">BLOG</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link className="nav-item-custom">CONTACT</Nav.Link>
            </LinkContainer>

          </Nav>

          {/* Donation Button */}
          <LinkContainer to="/donate">
            <Button className="donation-btn border-0 shadow-none">
              MAKE DONATION
            </Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ElectianNavbar;