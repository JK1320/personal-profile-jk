import React from "react";
//import emailjs from "emailjs-com";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styleSheets/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <form className="contact-form">
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="text" name="subject" id="" placeholder="Subject" />
        <input type="text" name="email" id="" placeholder="Email" />
        <textarea
          name="message"
          id=""
          cols=""
          rows="5"
          placeholder="Message"
        ></textarea>
        <button>Submit</button>
        {/* {done && "Thank you..."} */}
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
