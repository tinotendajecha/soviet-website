"use client";
import Map from "@/components/Map";
import { useEffect, useState } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [isDataSent, setIsDataSent] = useState(null);
  // const [validationError, setValidationError] = useState(false);
  const [emptyValueValidation, setEmptyValueValidation] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    // console.log(isDataSent)
    if (isDataSent == "Success") {
      toast.success(
        "Thank you for reaching out, we will be in touch! 🙂"
      );
      setFullName("");
      setPhoneNumber("");
      setSubject("");
    }
  }, [isDataSent, emptyValueValidation]);

  useEffect(() => {
    if (networkError) {
      toast.error("Please check your internet connection, reload the page and try again! 🙁");
    }
  }, [networkError]);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (fullName == "" || phoneNumber == "" || subject == "") {
      setEmptyValueValidation(true);
      toast.error("Please fill in all fields!");
      toast.error();
      return;
    }

    const data = {
      fullName,
      phoneNumber,
      subject,
    };

    // http://localhost:3000/api/sendEmail - Replace this in local env
    axios
      .post("https://sovietautoandbody.co.zw/api/sendEmail", data)
      .then((res) => {
        setIsDataSent(res.data.message);
        console.log(res)
      })
      .catch((err) => {
        // console.log(`Error occured: ${err}`);
        setNetworkError(true);
      });
  };

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
            <input
              type="text"
              value={fullName}
              placeholder="Your Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <input
              type="text"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <textarea
            value={subject}
            id=""
            cols="30"
            rows="10"
            placeholder="Subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="btn-container">
          <button className="submit-btn hover:text-white hover:bg-blue-500 transition transition-duration:200 ease-in-out" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div>
        <Map />
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
