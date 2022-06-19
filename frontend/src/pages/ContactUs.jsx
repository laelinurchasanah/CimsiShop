import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a3nyqpn",
        "template_zr576s8",
        form.current,
        "WswlHNV1zOW0guX5X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="contact-right">
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="name" name="user_name" required />

              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="subject"
                name="subject"
                required
              />

              <textarea
                name="message"
                placeholder="message"
                cols="20"
                rows="10"
                required
              ></textarea>

              <button type="submit" className="btn btn-primary" >
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-left">
            <h2>Contact Info</h2>
            <div className="info-contact">
              <i className="fa-solid fa-map-location-dot"></i>
              <span>Jl. Raya Bogor KM 51, Ruko Cibinong Kav 15, Bogor
              </span>
            </div>
            <div className="info-contact">
              <i className="fa-solid fa-envelope-circle-check"></i>
              <span>cimsi.shop@gmail.com</span>
            </div>
            <div className="info-contact">
              <i className="fa-solid fa-phone"></i>
              <span>021 83719800</span>
            </div>
          <div className="follow">
            <h4>Social Media</h4>
            <div className="media">
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-pinterest"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
