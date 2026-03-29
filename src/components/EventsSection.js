import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';

const EventsSection = () => {
  // Cards ka data array
  const events = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&w=500",
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
      title: "Letraset Sheets Passage And Recently.",
      date: "July 1, 2023",
      time: "15:00 - 19:00"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=500",
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
      title: "The Best Strategically Build Your Business Earning",
      date: "July 2, 2023",
      time: "10:00 - 15:00"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=500",
      location: "Cirantam’s, Shiloh, Hawaii 8062, USA.",
      title: "Political Commitment For Your Deportation Issue",
      date: "July 5, 2023",
      time: "13:00 - 16:00"
    }
  ];

  return (
    <div className="events-main-wrapper">
      {/* 1. TOP RED BAR (PATTA) */}
      <div className="top-gradient-bar"></div>

      <div className="container py-5 mt-4">
        <div className="row g-4">
          
          {/* LEFT SIDE TEXT SECTION */}
          <div className="col-lg-4 col-md-12">
            <div className="text-section pe-lg-4">
              <span className="subtitle">— Our Event's —</span>
              <h2 className="main-title-2 mt-3">
                You Can Attend Our Upcoming Events
              </h2>
              {/* Red and Blue Underline Decoration */}
              <div className="decor-line mt-4">
                <span className="line-red"></span>
                <span className="line-blue"></span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS SECTION */}
          <div className="col-lg-8 col-md-12">
            <div className="row g-4">
              {events.map((event) => (
                <div className="col-md-4 col-sm-6" key={event.id}>
                  <div className="event-card-custom">
                    <div className="img-holder">
                      <img src={event.image} alt="event" className="img-fluid" />
                    </div>
                    <div className="card-content p-3">
                      <div className="loc-info d-flex align-items-start mb-2">
                         <span className="loc-icon">📍</span>
                         <p className="small text-muted m-0 ms-2">{event.location}</p>
                      </div>
                      <h5 className="event-card-title mb-3">{event.title}</h5>
                      <hr className="divider-light" />
                      <div className="d-flex justify-content-between align-items-center metadata">
                        <span className="small text-muted">
                           <span className="text-primary me-1">📅</span> {event.date}
                        </span>
                        <span className="small text-muted">
                           <span className="text-danger me-1">🕒</span> {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventsSection;