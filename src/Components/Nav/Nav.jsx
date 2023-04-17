import React, { useState } from "react";

//css
import "./Nav.css";

//icon
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#Experience"
        onClick={() => setActive("#Experience")}
        className={active === "#Experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#Servises"
        onClick={() => setActive("#Servises")}
        className={active === "#Servises" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#Contact"
        onClick={() => setActive("#Contact")}
        className={active === "#Contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
