import React from 'react';
import Image from "next/image";
import "./styles/service.css";

const Serviceopp = ({ imageUrl, title, description }) => {
  return (
    <div className="service-flex opp-service-flex">
      <div className="service-details">
        <h1 className="title">{title}</h1>
        <p className="service-description">{description}</p>
      </div>
      <Image className="image opp-image" src={imageUrl} alt="Failed to load image :(" />
    </div>
  )
}

export default Serviceopp;