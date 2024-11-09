import React from "react";
import "./hero.css";
import curve1 from "../../assets/images/bodybuilder2.png";
import bodybuilder from "../../assets/images/bodybuilder.png";

const Hero = () => {
  return (
    <div className="main-common-style center hero-background">
      <div className="container-common-style center">
        <div className="column-center pad-left gap-10">
          <h2 className="hero-title regular-text-style">XON Fitness Club</h2>
          <h1 className="hero-head-title regular-text-style">
            Work With <br /> Professionals
          </h1>
          <p className="hero-text regular-text-style">
            Check out the most effective exercises for major group muscles{" "}
            <br /> To build your ideal shape of body
          </p>
          <div className="center gap-20">
            <button className="hero-btn regular-btn-style">
              Explore Exercises
            </button>
            <button className="hero-2-btn regular-btn-style">Hire Coach</button>
          </div>
        </div>
        <img className="body-builder regular-bb-style" src={bodybuilder} />
        <img className="body-builder2 regular-bb-style" src={curve1} />
      </div>
    </div>
  );
};

export default Hero;
