import React from "react";

//css
import "./Testimonials.css";

//img
import avatar1 from "../../img/avatar1.jpg";
import avatar2 from "../../img/avatar2.jpg";
import avatar3 from "../../img/avatar3.jpg";
import avatar4 from "../../img/avatar4.jpg";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//freem motion
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transition}
      id="Testimonials"
      className="Testimonials-section"
    >
      <div className="heder-H-continer">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container testimonials-container"
      >
        <SwiperSlide className="testimonials">
          <div className="clients-avatar">
            <img src={avatar1} alt="avatar" />
          </div>
          <h5 className="clients-name">Emilia Clarke</h5>
          <small className="clients-review">
            Highly trained and motivated administrative assistant with over
            seven years of experience providing clerical support to three
            executive professionals.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="clients-avatar">
            <img src={avatar2} alt="avatar" />
          </div>
          <h5 className="clients-name">jon Snow</h5>
          <small className="clients-review">
            Self-sufficient and organized custodian with over nine years of
            experience cleaning and providing maintenance to the upkeep of
            hospitals and clinics
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="clients-avatar">
            <img src={avatar3} alt="avatar" />
          </div>
          <h5 className="clients-name">Nanci Momoland</h5>
          <small className="clients-review">
            Engaging and encouraging teaching professional who provides a strong
            educational experience to 2nd-grade students.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="clients-avatar">
            <img src={avatar4} alt="avatar" />
          </div>
          <h5 className="clients-name">Aria Grande</h5>
          <small className="clients-review">
            Problem-solving information technology specialist with six years of
            experience using operating and security software for various
            technology companies
          </small>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default Testimonials;
