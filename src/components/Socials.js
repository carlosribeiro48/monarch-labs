import React from "react";
import teseract from "../images/teseract.png";
import { FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <section className='socials'>
      <img src={teseract} alt='teseract' />
      <div className='content'>
        <h1>Stay updated on future projects, events and announcements</h1>
        <div className='sm-cont'>
          <a
            href='https://twitter.com/tonayam_austin'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter className='icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/austin-tonayam'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='icon' />
          </a>
          <a
            href='https://twitter.com/tonayam_austin'
            target='_blank'
            rel='noreferrer'
          >
            <FaDiscord className='icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
