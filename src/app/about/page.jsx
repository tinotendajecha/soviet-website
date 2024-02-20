import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PiNumberSquareOneBold,
  PiNumberSquareTwoBold,
  PiNumberSquareThreeBold,
} from "react-icons/pi";
import "./about.css";

import carRepairMan from "../../../public/people2.jpg";

const about = () => {
  return (

    <div>
      <div className="heading my-8">
        <h2>Who are we?</h2>
        <span></span>
      </div>

      <div>
        <div className="second-flex">
          <div className="second-flex-img-parent p-3">
            <Image
              className="rounded-lg"
              src={carRepairMan}
              alt="Image of a rim"
            />
          </div>

          <div className="mission-wrapper">
            <div className="mission-parent">
              <div className="flex items-center py-2">
                <PiNumberSquareOneBold size={30} />
                <h1 className="point">Our Mission</h1>
              </div>

              <p className="px-2">
                Our mission at Soviet Auto and Body is to provide our customers
                with reliable and professional automotive repair and restoration
                services. We are dedicated to restoring your vehicle to its
                pre-damaged condition, ensuring your safety and satisfaction.
                With a strong focus on quality workmanship, attention to detail,
                and customer-centricity, we aim to be your preferred choice for
                all your auto body needs.
              </p>
            </div>

            <div className="mission-parent">
              <div className="flex items-center py-2">
                <PiNumberSquareTwoBold size={30} />
                <h1 className="point">Expertise and Experience</h1>
              </div>

              <p className="px-2">
                At Soviet Auto and Body, we have assembled a team of highly
                skilled technicians who possess a wealth of knowledge and
                expertise in auto body repair and restoration. Our technicians
                undergo continuous training to stay updated with the latest
                industry techniques and advancements. With their exceptional
                skills, attention to detail, and passion for their craft, they
                deliver superior results that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-parent">
        <div className="flex items-center py-2">
          <PiNumberSquareThreeBold size={30} />
          <h1 className="point">Commitment to Quality</h1>
        </div>

        <p className="px-2">
          At Soviet Auto and Body, quality is at the forefront of everything we
          do. We are committed to delivering exceptional craftsmanship and using
          only the finest materials available. From the moment you entrust your
          vehicle to us until the final delivery, we maintain a meticulous
          approach to ensure every detail is taken care of. Our dedication to
          quality extends to our customer service, where we strive to provide a
          seamless and transparent experience throughout the repair process.
        </p>
      </div>
    </div>
  );
};

export default about;
