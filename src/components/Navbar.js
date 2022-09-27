import React from "react";
import rightArrow from "../images/right-arrow.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav>
        <h4>Monarch Labs</h4>
        {window.innerWidth > 750 && (
          <>
            <ul>
              <li className='active'>Home</li>
              <li>Team</li>
              <li>Accelerator</li>
              <li>Whitepaper</li>
            </ul>
            <div className='contact'>
              <h4>Contact Us</h4>
              <img src={rightArrow} alt='arrow' />
            </div>
          </>
        )}
        {window.innerWidth < 750 && (
          <button onClick={() => setShowNav(!showNav)} className='btn'>
            {showNav ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </nav>
      {window.innerWidth < 750 && (
        <>
          <div className={`mobile-nav ${showNav ? `show` : null}`}>
            <ul>
              <li className='active'>Home</li>
              <li>Team</li>
              <li>Accelerator</li>
              <li>Whitepaper</li>
            </ul>
            <div className='contact'>
              <h4>Contact Us</h4>
              <img src={rightArrow} alt='arrow' />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
