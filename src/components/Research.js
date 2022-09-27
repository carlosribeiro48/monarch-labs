import React from "react";
import purpleUnderline from "../images/purple-underline.png";
import diamond from "../images/diamond.png";
import bigUnion from "../images/big-Union.png";
import arrowRight from "../images/arrow-right.png";

const Research = () => {
  return (
    <section className='research'>
      <img src={bigUnion} alt='star' className='star' />
      <h1 className='section-title'>Research Library</h1>
      <img src={purpleUnderline} alt='underline' className='underline' />
      <p>
        Our Research Library is more than just cutting edge analytics, portfolio
        tools and investment management utilities to help you stay on top of
        your assets. It is a social platform where blockchain enthusiasts can
        come together to research projects, share information and get rewarded
        for sharing quality research. <br />
        <br /> This is a premium service that will be accessible on a
        subscription basis or by holding our Monarch NFTs. We will also
        integrate other NFT collections into the Research Library so their
        holders can access all of the benefits of the research library at a
        discounted rate.
      </p>
      <button>
        Go to Website <img src={arrowRight} alt='arrow' />
      </button>
      <div className='box'>
        <img src={diamond} alt='diamond' className='diamond' />
      </div>
    </section>
  );
};

export default Research;
