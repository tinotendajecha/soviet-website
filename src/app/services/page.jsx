import React from "react";
import carBodyWorkImg from "../../../public/carBodyWork.jpg";
import Service from "@/components/service";
import Serviceopp from "@/components/serviceopp";
import carDealership from '../../../public/carSale.jpg'
import fleet from '../../../public/fleetmaint.jpg'
import tow from '../../../public/towingService.jpg'
import crash from '../../../public/collision.jpg'

const page = () => {
  return (
    <div className="service-flex-container">
      <div className="">
        <div className="heading what-we-do-heading">
          <h1>What we do</h1>
          <span></span>
        </div>

        <p className="marketing-statement">
          At Soviet, we offer a range of professional services to meet your
          vehicle's needs. With our team of skilled technicians and
          state-of-the-art facilities, we are committed to providing top-quality
          solutions. Explore our services below to learn more.
        </p>
      </div>

      <div className="services-container">
        <Service
          imageUrl={carBodyWorkImg}
          title="Panel beating"
          description="Our skilled technicians specialize in panel beating, restoring your
            vehicle's body to its original condition. We employ advanced
            techniques and tools to repair dents, scratches, and other damages,
            ensuring a seamless finish. "
        />

        <Serviceopp
          imageUrl={crash}
          title="Collision Corrections"
          description="In the unfortunate event of a collision, trust our team to handle the necessary repairs with precision and care. We offer comprehensive collision correction services, including frame straightening, dent removal, and paintwork, restoring your vehicle's structural integrity and appearance."
        />

        <Service
          imageUrl={carDealership}
          title="Vehicle Sales"
          description="Looking for a reliable vehicle? Explore our extensive inventory of quality pre-owned vehicles. Each vehicle undergoes thorough inspections, ensuring they meet our stringent quality standards. With competitive pricing and transparent transactions, we strive to make your vehicle purchase a hassle-free experience."
        />

        <Serviceopp
          imageUrl={fleet}
          title="Fleet Maintenance"
          description="We understand the importance of keeping your fleet in optimal condition. Our fleet maintenance services encompass routine inspections, preventive maintenance, and timely repairs, ensuring maximum uptime and minimizing operational disruptions."
        />

        <Service
          imageUrl={tow}
          title="Towing Services"
          description="When you have a car break down, we are just a phone call away, At Soviet we provide towing service in and out of town, distance is not a barrier to us, feel free to call when you need quick towing service nomatter where you are."
        />

        {/* <Serviceopp
          imageUrl={carBodyWorkImg}
          title="Panel beating"
          description="Our skilled technicians specialize in panel beating, restoring your
            vehicle's body to its original condition. We employ advanced
            techniques and tools to repair dents, scratches, and other damages,
            ensuring a seamless finish."
        /> */}
      </div>
    </div>
  );
};

export default page;
