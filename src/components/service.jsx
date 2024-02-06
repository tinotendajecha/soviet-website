import React from "react";
import Image from "next/image";
import "./styles/service.css";

const Service = ({ imageUrl, title, description }) => {
  return (
    <div className="service-flex">
      <Image className="image" src={imageUrl} alt="Failed to load image :(" />
      <div className="service-details">
        <h1 className="title">{title}</h1>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default Service;
