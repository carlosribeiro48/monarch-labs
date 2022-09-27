import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { roadmap } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Roadmap = () => {
  return (
    <section className='roadmap'>
      <h1 className='section-title'>
        Our <span>Roadmap</span>
      </h1>
      <Swiper slidesPerView={"auto"} spaceBetween={30} className='mySwiper'>
        {roadmap.map((item, index) => {
          const { quater, tasks, phase } = item;
          return (
            <SwiperSlide className='card' key={index}>
              <h6>{quater}</h6>
              <h4>{phase}</h4>
              <ul>
                {tasks.map((task, index) => {
                  return <li key={index}>{task}</li>;
                })}
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Roadmap;
