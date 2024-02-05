import React from "react";

const page = () => {
  return (
    <div>
      <div className="working-hours">
        <h1>Our Working Hours</h1>
        <div>
          <div>
            <h2>MON - FRI</h2>
            <p>08:00 - 17:00</p>
          </div>

          <div>
            <h2>SATURDAY</h2>
            <p>08:00 - 13:00</p>
          </div>

          <div>
            <h2>SUNDAY</h2>
            <p>Closed</p>
          </div>
        </div>
      </div>

      <form action="">
        <h1>Reach Out to us</h1>

        <div>
          <div>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <textarea name="subject" id="" cols="30" rows="10" placeholder="Subject"></textarea>
        </div>
      </form>
    </div>
  );
};

export default page;
