import React from "react";
import wavyLine from "../images/wavy-line.png";
import arrowRight from "../images/arrow-right.png";
import leftBtn from "../images/left-btn.png";
import rightBtn from "../images/right-btn.png";

const Programs = () => {
  return (
    <section className='programs'>
      <div className='left-box'>
        <img src={wavyLine} alt='' className='wavy-line' />
        <h1 className='section-title'>
          Our <span>Accelerator</span> Program
        </h1>
        <p>
          The Accelerator Program is a subdivision of Monarch Labs where we
          provide Consulting and Advisory services as well as Web3 development
          support for Websites, NFT minting sites, Staking Platforms, Raffle
          Programs, DEX's, Analytics Tools and more. <br /> <br /> Our team of
          highly experienced developers, investors, and advisors are ready to
          help you bring your project to life.
        </p>
        <button>
          Learn More <img src={arrowRight} alt='arrow' />
        </button>
      </div>
      <div className='right-box'>
        <div className='card'>
          <div className='btn prev-btn'>
            <img src={leftBtn} alt='previous item btn' />
          </div>
          <div className='btn next-btn'>
            <img src={rightBtn} alt='next item btn' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
