import React from "react";
import { features } from "../contants/dummy";
import "../styles/Features.scss";
import Header from "./Header";

const Features = () => {
  return (
    <div className="app__feature">
      <Header title="All you Need" content="GBHS YDE Cool Features" />

      <div className="features__container">
        {features.map((feature, index) => (
          <div className="feature">
            <div className={`icon on${index}`}></div>
            <h1>{feature.name}</h1>
            <p>{feature.test}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
