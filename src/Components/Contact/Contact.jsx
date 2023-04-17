import React, { useRef } from "react";

// css
import "./Contact.css";

//icon
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

// emaiil js
import emailjs from "emailjs-com";

//freem motion
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_21btdic",
        "template_6h42gsc",
        form.current,
        "i9liapLP0ywUkGYvo"
      )
      .then(
        (result) => {
          <p
            style={{
              backgroundColor: "green",
              padding: "1rem",
              color: "#000",
              fontSize: "1rem",
            }}
          >
            Tanks for Contact me{}
          </p>;
        },
        (error) => {
          <p
            style={{
              backgroundColor: "red",
              padding: "1rem",
              color: "#000",
              fontSize: "1rem",
            }}
          >
            {error}
          </p>;
        }
      );
  };
  const transition = { duration: 3, type: "spring" };

  return (
    <section id="Contact" className="contact-section">
      <div className="heder-H-continer">
        <h5>Get in Tutch</h5>
        <h2>Contact me</h2>
      </div>
      <div className="container contact-container">
        <div className="contact-options">
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            className="contact-option"
          >
            <HiOutlineMail className="contact-icon" />
            <h2>Email</h2>
            <h5>nimaobr@gmail.com</h5>
            <a href="mailto:nimaobr@gmail.com" target="_blank">
              Send a Message
            </a>
          </motion.article>
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            className="contact-option"
          >
            <BsInstagram className="contact-icon" />
            <h2>Instagram</h2>
            <h5>nemavo</h5>
            <a href="" target="_blank">
              Send a Message
            </a>
          </motion.article>
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            className="contact-option"
          >
            <ImWhatsapp className="contact-icon" />
            <h2>WhtasApp</h2>
            <h5>+98(933-533-1215)</h5>
            <a href="https://wa.me/qr/U2PQGAYRCBP5A1" target="_blank">
              Send a Message
            </a>
          </motion.article>
        </div>
        {/* End */}

        <form ref={form} onSubmit={sendEmail} className="from-from-contact">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-cntact">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
