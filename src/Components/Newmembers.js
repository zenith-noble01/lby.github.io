import React from "react";
import { user } from "../Images";
import "../styles/newmembers.scss";
import Header from "./Header";

const Newmembers = () => {
  return (
    <div className="app__newmembers">
      <Header
        title="RECENT ELECTED STUDENT DEPARTMENT"
        content="Students can also become leaders in School"
      />
      <div className="students__container">
        <div className="president">
          <img src={user} alt="" />
        </div>
        <div className="others">
          <div className="img">
            <img src={user} alt="" />
          </div>
          <div className="img">
            <img src={user} alt="" />
          </div>
          <div className="img">
            <img src={user} alt="" />
          </div>
          <div className="img">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newmembers;
