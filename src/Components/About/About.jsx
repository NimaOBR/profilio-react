import React from "react";

//css
import "./About.css";

//img
import nima1 from "../../img/nima1.jpg";

//icon
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

//freem motion
import { motion } from "framer-motion";

const About = () => {
  const transition = { duration: 3, type: "spring" };
  const transition1 = { duration: 2, type: "spring" };
  const transition2 = { duration: 4, type: "spring" };
  const transition3 = { duration: 6, type: "spring" };

  return (
    <section id="about" >
      <div className="tababout">
        <h5>Get to know</h5>
        <h1>About me</h1>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-img">
            <motion.img
                initial={{ rotate: '20deg' }}
                whileInView={{ rotate: '10deg' }}
                transition={transition}
            src={nima1} alt="nima" />
          </div>
        </div>
        <div className="about-contact">
          <div className="about-cards">
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={transition1}
            className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </motion.article>

            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={transition2}
            className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </motion.article>

            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={transition3}
            className="about-card">
              <BsFolderCheck className="about-icon" />
              <h5>Project</h5>
              <small>50+ Completed</small>
            </motion.article>
          </div>
          <p> Electronics student of ICT field with a valid programming
degree from John Hopkins University, USA, expert in hardware
and software of Google and the world of technology.</p>
          <a href="#Contact" className="btn btn-primary about-btn">Let`s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
