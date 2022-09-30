import React, { useRef, useEffect } from "react";
import union from "../images/Union.png";
import teseract from "../images/teseract.png";
import halfPipe from "../images/HalfPipe3.png";
import ratings from "../images/ratings.png";
import star from "../images/star.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const unionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(unionRef.current, {
      rotate: 360,
      duration: 2,
      scrollTrigger: unionRef.current,
      repeat: -1,
    });
  });

  return (
    <header>
      <div className='welcome'>
        <div className='line'></div>
        <h6>WELCOME TO MONARCH LABS</h6>
      </div>
      <div className='header-text'>
        <div className='box-1'>
          <div className='left'>
            <h1>
              Experience the
              <span className='union'>
                <img src={union} alt='union' className='union' ref={unionRef} />
              </span>
              <span className='poss'> possibilities of</span>
              <span className='purple-text'> Blockchain Technolgy</span>{" "}
              firsthand.
            </h1>
          </div>
          <div className='right'>
            <img src={teseract} alt='teseract' />
          </div>
        </div>
        <div className='box-2'>
          <div className='left'>
            <img src={halfPipe} alt='half pipe' />
          </div>
          <div className='right'>
            <h5>
              Find your next investments, stake to earn rewards and finally have
              access to a community-led fund
            </h5>
            <div className='ratings'>
              <img src={ratings} alt='ratings' />
              <div className='text'>
                <h1>82 +</h1>
                <p>Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='banner'>
        <h4>Monarch Labs</h4>
        <img src={star} alt='star' />
        <h4>Monarch Labs</h4>
        <img src={star} alt='star' />
        <h4>Monarch Labs</h4>
        <img src={star} alt='star' />
        <h4>Monarch Labs</h4>
      </div>
    </header>
  );
};

export default Header;
