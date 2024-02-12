// import { Resend } from "resend";

// export default async function handler(req, res) {
//   try {
//     const { fullName, phoneNumber, subject } = req.body;

//   const resend = new Resend("re_DLbewPR7_3ZnWHX1YGymYrbgTEC3vERaQ");

//   const { data, error } = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: ["tinotendajecha@gmail.com"],
//     subject: `New email from ${fullName}`,
//     html: `<p>${subject}. This is my phone number ${phoneNumber}</p>`,
//   });



//   res.status(200).json({
//     message: "Success",
//     data,
//   });
//   } catch (error) {
//     console.log('Error')
//   }
// }


import { Resend } from "resend";

export default async function handler(req, res) {
  try {
    const { fullName, phoneNumber, subject } = req.body;

    const resend = new Resend("re_DLbewPR7_3ZnWHX1YGymYrbgTEC3vERaQ");

    const { data, error } = await resend.emails.send({
      from: "sovietautoandbody.co.zw",
      to: ["tinotendajecha@gmail.com"],
      subject: `New email from ${fullName}`,
      html: `<p>${subject}. This is my phone number ${phoneNumber}</p>`,
    });

    if (error) {
      // Handle the error here, for example, log it or send a response to the client
      console.log("Email sending failed:", error);
      res.status(500).json({
        message: "Failed to send email",
        error: error.message,
      });
    } else {
      res.status(200).json({
        message: "Success",
        data,
      });
    }
  } catch (error) {
    // Handle any other error that might occur
    console.log("Error:", error);
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
}