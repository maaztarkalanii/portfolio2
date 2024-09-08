import React from "react";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>MAAZ TARKALANII</h2>
          <h1>Web & Flutter Developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextContainer">Welcome To My Portfolio</div>
      <div className="imageContainer">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
