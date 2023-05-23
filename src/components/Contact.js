import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styleSheets/Contact.css";

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k819hoc",
        "template_9ey3a7p",
        form.current,
        "TAafFvEsKqP6ItEaL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
        e.target.reset();
  };

  return (
    <div className="contact">
      <Navbar />
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" id="" placeholder="Name" required />
        <input type="text" name="user_subject" id="" placeholder="Subject" />
        <input
          type="text"
          name="user_email"
          id=""
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          id=""
          cols=""
          rows="5"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" value="Send" className="btn">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
