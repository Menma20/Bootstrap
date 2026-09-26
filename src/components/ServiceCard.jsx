import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img src={service.img} className="card-img-top" alt={service.title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{service.title}</h5>
          <p className="card-text">{service.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;