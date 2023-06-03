import React from "react";
import starImage from "../assets/img/svg/star.svg";
import leaf4 from "../assets/img/svg/leaf4.svg";
const OurClassifications = () => {
  return (
    <div className="HeroBackgroundImage py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-3 relative z-10">
        <img
          className="absolute -z-10 top-1/3 left-1/4"
          src={leaf4}
          alt="leaf4"
        />
        <div className="py-8 px-2 sm:px-5 md:py-10  md:pl-16 border border-[#411A68] backdrop-blur-[9px] rounded-[10px] aboutbackground max-w-[576px]">
          <h2
            data-aos-duration="3000"
            data-aos="zoom-in-up"
            className="font-bold text-3xl md:text-4xl lg:text-5xl ff_philosopher  text-white"
          >
            Our <span className="text_gridient">Classifications</span>
          </h2>
          <p
            data-aos-duration="3000"
            data-aos="zoom-in-down"
            className="mt-3 text_shadow text-white text-sm md:text-base font-normal ff_montserrat"
          >
            We’re proud of all our weed, but we still classify it based on
            quality and price, with our levels classed at:
          </p>
          <div
            data-aos-duration="3000"
            data-aos="zoom-in-left"
            className="mt-6 flex items-center gap-1"
          >
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
          </div>
          <h4
            data-aos-duration="3000"
            data-aos="zoom-in-down"
            className="text-white text_shadow ff_montserrat font-semibold text-xl md:text-2xl"
          >
            2- Star
          </h4>
          <p
            data-aos-duration="3000"
            data-aos="zoom-in-right"
            className=" text_shadow text-white text-sm md:text-base font-normal ff_montserrat"
          >
            Very affordable , entry level quality
          </p>
          <div
            data-aos-duration="3000"
            data-aos="zoom-in-left"
            className="mt-9 flex items-center gap-1"
          >
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
          </div>
          <h4
            data-aos-duration="3000"
            data-aos="zoom-in-down"
            className="text-white text_shadow ff_montserrat font-semibold text-xl md:text-2xl"
          >
            3- Star
          </h4>
          <p
            data-aos-duration="3000"
            data-aos="zoom-in-right"
            className=" text_shadow text-white text-sm md:text-base font-normal ff_montserrat"
          >
            Tried, tested, and affordable.
          </p>
          <div
            data-aos-duration="3000"
            data-aos="zoom-in-left"
            className="mt-9 flex items-center gap-1"
          >
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
          </div>
          <h4
            data-aos-duration="3000"
            data-aos="zoom-in-down"
            className="text-white text_shadow ff_montserrat font-semibold text-xl md:text-2xl"
          >
            4- Star
          </h4>
          <p
            data-aos-duration="3000"
            data-aos="zoom-in-right"
            className=" text_shadow text-white text-sm md:text-base font-normal ff_montserrat"
          >
            A step up in terms of taste, high, and quality.
          </p>
          <div
            data-aos-duration="3000"
            data-aos="zoom-in-left"
            className="mt-9 flex items-center gap-1"
          >
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
            <img src={starImage} alt="starImage" />
          </div>
          <h4
            data-aos-duration="3000"
            data-aos="zoom-in-down"
            className="text-white text_shadow ff_montserrat font-semibold text-xl md:text-2xl"
          >
            5- Star
          </h4>
          <p
            data-aos-duration="3000"
            data-aos="zoom-in-right"
            className=" text_shadow text-white text-sm md:text-base font-normal ff_montserrat"
          >
            Top-shelf buds for those special occasions.
          </p>
          <button
            data-aos-duration="3000"
            data-aos="zoom-out"
            className=" mt-12 py-[14px] md:text-xl text-sm  px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold "
          >
            TRY PURPLE PANDA TODAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClassifications;
