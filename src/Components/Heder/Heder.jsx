import React from "react";
import CTA from "./CTA";

//img
import me from "../../img/nima.png";
import HederSousal from "./HederSousal";

//css
import "./Heder.css";

//freem motion
import { motion } from "framer-motion";

const Heder = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <header>
      <div className="container heder-container">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
        >
        <h5>Hello I'am</h5>
        <h1>Nima Mohammadi</h1>
        <h5 className="text-light">Front End Developer</h5>
        </motion.div>
        <CTA />
        <HederSousal />
        <div className="me">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            src={me}
            alt="me"
          />
        </div>
        <a href="" className="scrollDown">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Heder;
