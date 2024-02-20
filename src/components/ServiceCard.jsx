import React from "react";
import Image from "next/image";


const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card hover:bg-slate-100">
      <div className="info-container">
        <div className="title-container">
        {/* <div className="icon">{icon}</div> */}
        <Image src={icon} className="rounded"/>
        <h2 className="title">{title}</h2>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
