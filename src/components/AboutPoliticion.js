import React from 'react';
import '../HomePage2.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPoliticionImg from "../images/about-Politicion-img.jpg"

const AboutPoliticion = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 p-0">
            <div className="politician-img-wrapper">
              {/* Image path yahan daalein */}
              <img 
                src={AboutPoliticionImg} 
                alt="Politician" 
                className="img-fluid w-100 shadow-lg"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 col-md-12 ps-lg-5">
            <div className="content-box">
              <h6 className="text-danger fw-bold mb-3">About Politician</h6>
              <h1 className="display-4 fw-bold main-heading mb-4">
                We raise voice for people rights <span className="ampersand">&</span> provide rights.
              </h1>
              <p className="text-muted lead-text mb-4">
                Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. 
                Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. 
                Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. 
                Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et 
                ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. 
                Ut pharetra augue nec augue.
              </p>
              <button className="btn custom-btn px-4 py-2">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPoliticion;