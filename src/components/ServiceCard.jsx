import React from "react";
import Link from "next/link";

import { FaAngleRight } from "react-icons/fa";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="info-container">
        <div className="title-container">
        <div className="icon">{icon}</div>
        <h2 className="title">{title}</h2>
        </div>
        <p className="description">{description}</p>
      </div>
      {/* <div>
        <Link href="/services">
            <button>Learn More</button>
        </Link>
        <FaAngleRight />
      </div> */}
    </div>
  );
};

export default ServiceCard;