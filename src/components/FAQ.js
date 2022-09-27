import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { faq } from "../data";
import diagDown from "../images/diagonal-arrow-down.png";

const FAQ = () => {
  const handleClick = (e) => {
    const current = e.target.parentElement.parentElement;
    current.classList.toggle(`open`);
  };

  return (
    <section className='faq'>
      <h3 className='section-title'>Frequently Asked Questions</h3>
      <div className='questions'>
        {faq.map((item, index) => {
          const { question, answer } = item;
          return (
            <article key={index}>
              <div className='question'>
                <h5>{question}</h5>
                <img src={diagDown} alt='arrow' onClick={handleClick} />
              </div>
              <div className='ans'>
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
