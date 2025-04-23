import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
export const NavBar = () => {
  const [navbarClass, setNavbarClass] = useState("list");

  const handleToggle = () => {
    setNavbarClass("list activeNavbar");
  };

  const handleClose = () => {
    setNavbarClass("list");
  };
  return (
    <div className="navBar flexb">
      <div className="flex">
        <MdOutlineTravelExplore className="logo" />
        <h2>Travel</h2>
      </div>
      <div className="icon">
        <FaBars onClick={handleToggle} />
      </div>
      <div className={navbarClass}>
        <div className="removeToggle">
          <TiDelete size="44px" onClick={handleClose} />
        </div>
        <ul className="flex  navList">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="btn">Book Now</button>
          </li>
        </ul>
      </div>

      {/* {isOpen && <div className={isOpen ? "open" : ""}></div>} */}
    </div>
  );
};
