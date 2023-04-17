import React from "react";

// css
import "./Profalio.css";

//img
import Protfolio from "../../img/Protfolio-1.webp";
import Protfolio2 from "../../img/Protfolio-2.webp";
import Protfolio3 from "../../img/Protfolio-3.webp";
import Protfolio4 from "../../img/bloghub.png";
import Protfolio6 from "../../img/dalla.png";
import Protfolio7 from "../../img/adminpanel.png";
import nimaweb from "../../img/nimaweb.png";

//freem motion
import { motion } from "framer-motion";

const Profalio = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <section id="Profalio" className="Profalio-section">
      <div className="heder-H-continer">
        <h5>My Recent Work</h5>
        <h2>Protfolio</h2>
      </div>
      <div className="container container-protfolio">
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="protfolio-item"
        >
          <div className="protfolio-item-img">
            <img src={nimaweb} alt="" />
          </div>
          <h3>Night Movie WebSite</h3>
          <a
            href="https://github.com/NimaOBR?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://majestic-bunny-2e7b53.netlify.app"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="protfolio-item"
        >
          <div className="protfolio-item-img">
            <img src={Protfolio2} alt="" />
          </div>
          <h3>Crypto Currency Dashboard</h3>
          <a
            href="https://github.com/NimaOBR?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://dribbble.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="protfolio-item"
        >
          <div className="protfolio-item-img">
            <img src={Protfolio3} alt="" />
          </div>
          <h3>Chart Templates & infographics</h3>
          <a
            href="https://github.com/NimaOBR?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://dribbble.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="protfolio-item"
        >
          <div className="protfolio-item-img">
            <img src={Protfolio4} alt="" />
          </div>
          <h3>Blog Hub App</h3>
          <a
            href="https://github.com/NimaOBR?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://delightful-starlight-cc06db.netlify.app"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="protfolio-item"
        >
          <div className="protfolio-item-img">
            <img autoPlay muted src={Protfolio7} alt="" />
          </div>
          <h3>Panel Admin</h3>
          <a
            href="https://github.com/NimaOBR?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://loquacious-pithivier-89c108.netlify.app"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="protfolio-item"
        >
          <div className="protfolio-item-img">
            <img src={Protfolio6} alt="" />
          </div>
          <h3>Dollar App</h3>
          <a
            href="https://github.com/NimaOBR?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://guileless-pie-f710e1.netlify.app"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.article>
      </div>
    </section>
  );
};

export default Profalio;
