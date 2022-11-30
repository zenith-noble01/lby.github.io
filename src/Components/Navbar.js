import { useState } from "react";
import { routes } from "../contants/dummy";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [ishover, setIsHover] = useState(false);
  return (
    <div className="app__navbar">
      <div className="logo">LBY</div>

      <ul className="routes">
        {routes.map((route) => (
          <li>{route.name}</li>
        ))}
      </ul>
      <div className="cta__btns">
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            background: ishover ? "#55bdb4" : "white",
            color: ishover ? "whitesmoke" : null,
          }}
        >
          Sign In
        </button>
        <button
          style={{
            background: ishover ? "white" : "#55bdb4",
            color: ishover ? "#666" : "whitesmoke",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
