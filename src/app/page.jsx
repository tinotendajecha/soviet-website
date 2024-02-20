import Image from "next/image";
import Map from "@/components/Map";

import image1 from '../../public/image1.jpg';
import colli from '../../public/colli.jpg';
import sales from '../../public/sales.jpg';
import fleettt from '../../public/fleettt.jpg';


import {
  FaCar,
  FaAngleRight,
  FaCarCrash,
  FaWrench,
  FaExclamationTriangle,
  FaLongArrowAltRight,
} from "react-icons/fa";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import secondImg from "../../public/second-image-test.jpg";

import {
  PiNumberSquareOneBold,
  PiNumberSquareTwoBold,
  PiNumberSquareThreeBold,
} from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="primary-container ">
      {/* <div className="whatsapp">
        <FaWhatsapp />
      </div> */}
      <div className="sub-container landing-section ">
        <div className="welcome-section">
          <h1>Welcome to Soviet Auto & Body</h1>
          <p>
            We are a leading provider of automotive solutions, specializing in
            panel beating, collision corrections, fleet maintenance, vehicle
            sales, and supplies. With years of experience and a team of skilled
            professionals, we are committed to delivering exceptional services
            and exceeding our customers' expectations. Explore our website to
            learn more about our services and how we can assist you with all
            your automotive needs.
          </p>

          <Link href='#second-section'>
          <button className="button welcome-button hover:text-white hover:bg-blue-500 transition transition-duration:200 ease-in-out">
            Read More <FaAngleRight className="welcome-right-angle mb-0.5" />
          </button>
          </Link>
        </div>

        {/* <div>
          <Image src={Illustration} /> 
        </div> */}
      </div>

      <div className="sub-container brief-services" id="second-section">
        <div className="heading">
          <h1>Services We Offer</h1>
          <span></span>
        </div>
        <div className="cards">
          <ServiceCard
            // icon={<FaCarCrash size={70} />}
            icon={image1}
            title="Panel Beating"
            description="Our skilled technicians specialize in panel beating, restoring your vehicle's body to its original condition. We employ advanced techniques and tools to repair dents, scratches, and other damages, ensuring a seamless finish."
          />

          <ServiceCard
            // icon={<FaExclamationTriangle size={70} />}
            icon={colli}
            title="Collision Corrections"
            description="In the unfortunate event of a collision, trust our team to handle the necessary repairs with precision and care. We offer comprehensive collision correction services, including frame straightening, dent removal, and paintwork, restoring your vehicle's structural integrity and appearance."
          />

          <ServiceCard
            // icon={<FaCar size={70} />}
            icon={sales}
            title="Vehicle Sales"
            description="Looking for a reliable vehicle? Explore our extensive inventory of quality pre-owned vehicles. Each vehicle undergoes thorough inspections, ensuring they meet our stringent quality standards. With competitive pricing and transparent transactions, we strive to make your vehicle purchase a hassle-free experience."
          />

          <ServiceCard
            // icon={<FaWrench size={70} />}
            icon={fleettt}
            title="Fleet Maintenance"
            description="We understand the importance of keeping your fleet in optimal condition. Our fleet maintenance services encompass routine inspections, preventive maintenance, and timely repairs, ensuring maximum uptime and minimizing operational disruptions.
            "
          />
        </div>

        <div className="learn-more-container">
          <Link href="/services">
            <button className="button learn-more">
              Learn More <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="heading my-8">
          <h2>Why Choose Us</h2>
          <span></span>
        </div>

        <div>
          <div className="flex-wrapper">
            <div className="p-3 ">
              <div className="image-parent">
                <Image className="rounded-lg" src={secondImg} alt="Image of a rim" />
              </div>
            </div>

            <div>
              <div className="benefits-wrapper">
                <div className="benefit-parent">
                  <div className="flex items-center py-2 px-2">
                    <PiNumberSquareOneBold size={30} />
                    <h1 className="point">Decades of experience</h1>
                  </div>

                  <p className="px-3">
                    With over 15 years of experience in the automotive industry,
                    we have gained a deep understanding of panel beating and
                    collision corrections. Our technicians stay updated with the
                    latest industry techniques to deliver top-notch services.
                  </p>
                </div>

                <div className="benefit-parent">
                  <div className="flex items-center py-2 px-2">
                    <PiNumberSquareTwoBold size={30} />
                    <h1 className="point">Quality Workmanship</h1>
                  </div>

                  <p className="px-3">
                    Our team of highly skilled technicians ensures meticulous
                    attention to detail, delivering flawless results every time.
                    With our commitment to quality, your vehicle will be
                    restored to its original condition.
                  </p>
                </div>

                <div className="benefit-parent">
                  <div className="flex items-center py-2 px-2">
                    <PiNumberSquareThreeBold size={30} />
                    <h1 className="point">Cutting-Edge Equipment</h1>
                  </div>

                  <p className="px-3">
                    Our workshop is equipped with the latest technology,
                    allowing us to provide precise and efficient repairs. This
                    ensures quick turnaround times and exceptional results for
                    our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div>
        <div className="heading">
          <h2>Our Location</h2>
          <span></span>
        </div>

        <Map />
      </div>
    </div>
  );
}
