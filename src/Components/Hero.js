import React, { useState } from "react";
import { gadgets } from "../contants/dummy";
import { user } from "../Images";
import "../styles/hero.scss";

const Hero = () => {
  const [ishover, setIsHover] = useState(true);
  return (
    <div className="home">
      <div className="home_wrapper">
        <div className="leftcontainer">
          <p>
            GBHS <span>YDE</span>
          </p>
          <span>Building the next leaders of continent!</span>

          <div className="cta__container">
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                background: ishover ? "#0f2435" : "#f0f9f8",
                color: ishover ? "whitesmoke" : null,
              }}
            >
              Get started-for free
            </button>
            <button
              style={{
                background: ishover ? "#f0f9f8" : "#0f2435",
                color: ishover ? "#666" : "whitesmoke",
              }}
            >
              Explore campus
            </button>
          </div>
        </div>
        <div className="rightcontainer">
          <img src={user} alt="" />

          <div className="right__gadgets">
            <div className="badge">
              {/* <img src={badge} alt="" /> */}
              ok
            </div>
            <div className="gadgets__container">
              {gadgets.map((gadget) => (
                <div className="gads">
                  <div className={`img ${gadget.name}`}>
                    <img src={gadget.image} alt="" />
                  </div>
                  <p>
                    {gadget.name} <span>{gadget.percentage}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
