"use client";
import Map from "@/components/Map";
import { useState } from "react";


const page = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");

  const sendEmail = (e) => {
    e.preventDefault()

    console.log({
      name : fullName,
      phoneNumber,
      subject
    })

  }

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

      <form action="" onSubmit={sendEmail}>
        <h2>Reach Out to us</h2>

        <div>
          <div className="input-container">
            <input type="text" value={fullName} placeholder="Your Name" onChange={(e) => {
              setFullName(e.target.value)
            }}/>
            <input type="text" value={phoneNumber} placeholder="Phone Number" onChange={(e) => {
              setPhoneNumber(e.target.value)
            }} />
          </div>
          <textarea
            value={subject}
            id=""
            cols="30"
            rows="10"
            placeholder="Subject"
            onChange={(e) => {
              setSubject(e.target.value)
            }}
          ></textarea>
        </div>
        <div className="btn-container">
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>

      <div>
        <Map />
      </div>
    </div>
  );
};

export default page;
