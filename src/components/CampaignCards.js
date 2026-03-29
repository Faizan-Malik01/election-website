import React from 'react';
import '../HomePage2.css';
import { Megaphone, Users, Heart, MoveRight } from 'lucide-react'; // Icons ke liye

const CampaignCards = () => {
  const cardData = [
    {
      title: "OUR CAMPAIGN",
      desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since the scrambled it to make.",
      bgColor: "bg-blue",
      icon: <Megaphone size={40} />,
      arrowColor: "#2b50d3"
    },
    {
      title: "BECOME A VOLUNTEER",
      desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since the scrambled it to make.",
      bgColor: "bg-green",
      icon: <Users size={40} />,
      arrowColor: "#00c691"
    },
    {
      title: "MAKE DONATION",
      desc: "Lorem Ipsum has been the industry's standard dummy of the text ever since the scrambled it to make.",
      bgColor: "bg-red",
      icon: <Heart size={40} />,
      arrowColor: "#e21f41"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-0"> {/* g-0 use kiya hai taaki gap na rahe cards ke beech image ki tarah */}
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`campaign-card ${card.bgColor} text-center p-5`}>
                {/* Icon Section */}
                <div className="icon-wrapper mb-4">
                  <div className="icon-circle">
                    {card.icon}
                  </div>
                </div>

                {/* Content Section */}
                <h3 className="card-title text-white fw-bold mb-3">{card.title}</h3>
                <p className="card-text text-white-50 mb-5">
                  {card.desc}
                </p>

                {/* Bottom Arrow Button */}
                <div className="button-wrapper">
                  <button className="arrow-btn">
                    <MoveRight style={{ color: card.arrowColor }} size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignCards;