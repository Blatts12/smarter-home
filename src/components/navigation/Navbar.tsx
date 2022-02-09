import React from "react";
import { BsGearFill } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <img className="navbar--logo" src="src/logo.png" alt="Logo" />
      <button className="navbar--settings">
        <BsGearFill />
      </button>
    </header>
  );
};

export default Navbar;
