import React from "react";
import send from "../images/send.png";

const Footer = () => {
  return (
    <footer>
      <div className='newsletter'>
        <h4>Subscribe to Our Newsletter</h4>
        <div className='input-field'>
          <input type='email' placeholder='Enter your email address' />
          <div className='icon'>
            <img src={send} alt='send icon' />
          </div>
        </div>
      </div>
      <div className='links'>
        <ul>
          <li className='active'>Home</li>
          <li>Team</li>
          <li>Accelerator</li>
          <li>Whitepaper</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
