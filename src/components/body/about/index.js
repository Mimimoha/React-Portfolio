import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <br /> <span className="info-name">welcome to my Portfolio </span>.
          <br />I'm a Full Stack Web Developer with
          extensive knowledge in backend and
          front end application development.
          Fluent in Arabic, Somali and English
          with excellent communication and
          interpersonal skills. A fast learner with
          strong time management and
          multitasking skills. Strong work ethic in
          team and individual settings to drive
          product success and process
          efficiency. Exceptional
          troubleshooting and problem solving
          skills with analytical mindset.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;