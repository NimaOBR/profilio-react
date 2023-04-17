import React from "react";

//img
import wave from "../../img/wave.svg";

//css
import "./Footer.css";

//icons
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="Footer" >
      <div className="footer-container">
        <ul className="footer-title">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Profalio">Protfolio</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="footer-icons">
          <a
            href="https://instagram.com/nemavo?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <FiInstagram />
          </a>
          <a href="https://github.com/NimaOBR?tab=repositories" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nima-mohammadi-b5880122b/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        {/* <div className="footer-copy-right">
          <small>&copy; NIMA Tutorials. All rights reserved</small>
        </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
