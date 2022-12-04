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

          <div className="text__container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            itaque hic officia ex consequatur necessitatibus fuga, asperiores
            expedita natus earum veniam unde modi corrupti quibusdam soluta.
            Aspernatur est amet assumenda.
          </div>
        </div>
        <div className="others">
          {Array.from({ length: 4 }).map((item, index) => (
            <div className="img">
              <img src={user} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newmembers;
