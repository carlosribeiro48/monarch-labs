import React from "react";
import wavyLine from "../images/wavy-line.png";
import prism from "../images/Prism1.png";
import { nfts } from "../data";

const Nfts = () => {
  return (
    <section className='nfts'>
      <img src={prism} alt='prism' className='prism' />
      <div className='title'>
        <img src={wavyLine} alt='wavy line' />
        <h1 className='section-title'>
          Our <span>NFTS</span>
        </h1>
      </div>
      <p className='info'>
        Our NFT collections are not only an access NFT but also act as "miners".
        We will be launching two separate collections consisting of 5000 pieces
        each. We have designed our NFTs to bring value to our holders, not only
        in the short term but in the long term as well by following the
        principles of Bitcoin. <br />
        <br /> With our NFT collections you will gain full access to our
        innovative Research Library that will include various tools like a
        Multi-chain support Portfolio Manager, Advanced Analytics, Access to
        detailed research on current and upcoming projects and more. By staking
        your Monarch NFT you will be able to “mine” our Monarch Token ($MLE)
        that will be the backbone of the Monarch Ecosystem.
      </p>
      <div className='grid-container'>
        {nfts.map((nft) => {
          const { name, quantity, size, img } = nft;
          return (
            <div className='nft'>
              <img src={img} alt={name} />
              <div className='details'>
                <div className='left'>
                  <h5>{name}</h5>
                  <h6>{quantity}</h6>
                  <p>{size}</p>
                </div>
                <div className='right'>
                  <button>Coming</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Nfts;
