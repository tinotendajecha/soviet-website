'use-client'
import React from "react";
import Map from "@/components/Map";


const page = () => {
  return (
    <div>
      <div className="working-hours">
        <h1>Our Working Hours</h1>
        <div className="time-container">
          <div className="time-item">
            <h2>MON - FRI</h2>
            <p>08:00 - 17:00</p>
          </div>

          <div className="time-item">
            <h2>SATURDAY</h2>
            <p>08:00 - 13:00</p>
          </div>

          <div className="time-item">
            <h2>SUNDAY</h2>
            <p>Closed</p>
          </div>
        </div>
      </div>

      <form action="">
        <h2>Reach Out to us</h2>

        <div>
          <div className="input-container">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <textarea name="subject" id="" cols="30" rows="10" placeholder="Subject"></textarea>
        </div>
        <div className="btn-container">
          <button className="submit-btn">Submit</button>
        </div>
      </form>

      <div>
        <Map />
      </div>
    </div>
  );
};

export default page;
