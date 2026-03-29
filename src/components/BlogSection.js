import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';

const BlogComponent = () => {
  const blogs = [
    {
      id: 1,
      date: "28",
      month: "AUGUST",
      title: "Letraset Sheets Passage And Recently.",
      img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 2,
      date: "25",
      month: "MARCH",
      title: "Politics Is Why We Can’t Have Nice Things.",
      img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 3,
      date: "23",
      month: "SEP",
      title: "Liberty Divided Over Criticism Justice League",
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <div className="blog-wrapper">
      {/* --- TOP SECTION (First Image) --- */}
      <header className="top-header-section">
        <div className="top-blue-bar"></div>
        <div className="glow-container">
          <div className="shape circle-top-left"></div>
          <div className="shape circle-bottom-right"></div>
          
          <div className="container text-center content-box">
            <p className="blog-badge">— Blog Post —</p>
            <h1 className="main-heading">Awesome Blog Post & Article.</h1>
          </div>
        </div>
      </header>

      {/* --- BOTTOM SECTION (Second Image - Cards) --- */}
      <section className="cards-section container py-5">
        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <div className="blog-card border-0">
                <div className="image-box position-relative">
                  <img src={blog.img} alt="blog" className="img-fluid rounded-0 w-100" />
                  {/* Floating Date Badge */}
                  <div className="date-badge">
                    <div className="day">{blog.date}</div>
                    <div className="month">{blog.month}</div>
                  </div>
                </div>
                <div className="card-body px-0 pt-5">
                  <h3 className="card-title-text">{blog.title}</h3>
                  <p className="card-description">
                    Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
                  </p>
                  <button className="btn btn-read-more rounded-pill">READ MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll Top Button */}
      <div className="fab-button">
        <span className="arrow">↑</span>
      </div>
    </div>
  );
};

export default BlogComponent;