import React from "react";

//css
import "./Servises.css";

//icons
import { BiCheck } from "react-icons/bi";

//freem motion
import { motion } from "framer-motion";

const Servises = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <section id="Servises" className="Services-Sections">
      <div className="heder-H-continer">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container servisces-contaoner">
        {/* Start of UX/UI  */}

        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={transition}
          className="services"
        >
          <div className="services-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="servic-list">
            <li>
              <BiCheck className="servic-icon" />
              <p>color psychology</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>User convenience on the website</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Correct arrangement of elements</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Responsive elements</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Use high quality photos</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Fast and without refreshing the website</p>
            </li>
          </ul>
        </motion.article>
        {/* End of UX/UI */}

        {/* Start of Web Development  */}
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={transition}
          className="services"
        >
          <div className="services-head">
            <h3>Web Development</h3>
          </div>
          <ul className="servic-list">
            <li>
              <BiCheck className="servic-icon" />
              <p>Everyone needs a website</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Excellent website appearance</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Dark Mode / Light Mode</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Super high speed</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Great Seo for the web</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Mobile optimized sites</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Website and great page templates</p>
            </li>
          </ul>
        </motion.article>
        {/* End of Web Development */}

        {/* Start of CONTENT CREATION  */}
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={transition}
          className="services"
        >
          <div className="services-head">
            <h3>Content Creation</h3>
          </div>
          <ul className="servic-list">
            <li>
              <BiCheck className="servic-icon" />
              <p>Blog posts, videos, sinfographics ...</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Request customer feedback</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Put yourself in your audience’s shoes</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Investigate what your competition</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p>Brainstorm with larger groups</p>
            </li>
            <li>
              <BiCheck className="servic-icon" />
              <p> select a keyword to target </p>
            </li>
          </ul>
        </motion.article>
        {/* End of CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Servises;
