import React from "react";
import { useEffect } from "react";

//css
import "./Experience.css";

//icons
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience" className="Experience">
      <div className="experience-tab">
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-experience">
        <div className="experience-frontend">
          <h3>FrontEnd Development</h3>
          <h5 className="text-light technology">Technology</h5>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>HTML5</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Css3</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Scss</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>BootStrap</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Tailwind</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Material-ui</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Ux-Ui</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>ES6/JSX/TSX</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>React</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Redux</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Redux-Toolkit</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>NextJs</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>ReactNative</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>TypeScript</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Graph QL</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>RestApi</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>Figma</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h5>PhotoShop</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
