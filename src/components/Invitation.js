import React from "react";
import ribbon from "../images/ribbon.png";
import prism from "../images/prism.png";
import arrowRight from "../images/arrow-right.png";
import hollowBox from "../images/hollow-box.png";
import sphere from "../images/sphere.png";
const Invitation = () => {
  return (
    <section className='invitation'>
      <img src={ribbon} alt='ribbon' className='ribbon' />
      <div className='text'>
        <h1 className='section-title'>
          Join the <span>Revolution</span>
        </h1>
        <p>
          We are entering a new era of Next-Generation technologies that is
          about to change the way we think and experience technology. If you
          missed the internet revolution, now is your chance to get in early on
          the next generation of interconnectivity.
        </p>
      </div>
      <div className='grid-container'>
        <div className='item item-1'>
          <h2>
            <span>Join Our Dis</span>cord Community
          </h2>
          <img src={prism} alt='prism' className='prism' />
          <p>
            Web3 is more than just amazing technology, it is driven by community
            and to realize true decentralization we need to stand together to
            reach the end goal. <br />
            <br /> Emerging markets can be scary especially if you are new. Join
            our community to stay up to date with the latest trends, meet like
            minded people and let's make history together.
          </p>
          <button>
            Join Now <img src={arrowRight} alt='arrow' />
          </button>
        </div>
        <div className='item item-2'>
          <div className='left'>
            <h2>
              <span>Monarch Lea</span>rning
            </h2>
            <p>
              If you are new to the space and just want to get a quick idea of
              what an NFT, Dapp, blockchain, Metaverse, Cryptocurrency and more!
              We have put together a beginner's course on blockchain
              technologies to help you get started.
            </p>
            <button>
              Learn More <img src={arrowRight} alt='arrow' />
            </button>
          </div>
          <div className='right'>
            <img src={hollowBox} alt='hollow box' />
          </div>
        </div>
        <div className='item item-3'>
          <div className='left'>
            <h2>
              <span>Education Po</span>rtal
            </h2>
            <p>
              Blockchain Mastery is a Web3 based education platform where you
              can access courses from experts in the field to learn how to build
              Dapps, NFTs, Cryptocurrencies and more!
            </p>
            <button>
              Coming Soon <img src={arrowRight} alt='arrow' />
            </button>
          </div>
          <div className='right'>
            <img src={sphere} alt='sphere' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
