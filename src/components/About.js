import React from "react";
import halfDiamond from "../images/half-diamond.png";
import halfOrb from "../images/half-orb.png";
import underline from "../images/underline.png";

const About = () => {
  return (
    <section className='about'>
      <img src={halfDiamond} alt='diamond' className='diamond' />
      <img src={halfOrb} alt='orb' className='orb' />
      <h1 className='section-title'>
        About <span> Monarch Labs</span>
      </h1>
      <img src={underline} alt='' />
      <div className='info'>
        <p>
          We are more than just a software company. Monarch Labs is a group of
          technology enthusiasts that came together to build cutting edge Web3
          applications, NFT projects and more. We aim to become one of the
          leaders in the Web3 domain. <br /> <br /> Our platform has been
          designed to provide value for holders in many ways and also keeping
          newcomers in mind. The Monarch Ecosystem allows everyone to experience
          the power of blockchain technology first-hand. <br /> <br /> DeFi is
          changing the way we think about finance and investing, however it is
          hard to manage and stay up to date with so many projects emerging. The
          Monarch Ecosystem will feature powerful applications to help you
          learn, track and manage your assets in the Web3 domain. <br /> <br />
          The Monarch Ecosystem will also feature a powerful education platform
          for experienced professionals in the industry to offer educational
          courses to teach newcomers and ultimately push towards mainstream
          adoption of blockchain technologies. <br /> <br /> Monarch Labs -
          Changing the way we think about Finance and Technology!
        </p>
      </div>
    </section>
  );
};

export default About;
