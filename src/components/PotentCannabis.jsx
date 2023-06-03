import React from "react";
import spaveshipImage from "../assets/img/png/spaceshipImage.png";
import countGif from "../assets/img/png/countingGIF.gif";
const PotentCannabis = () => {
  return (
    <div className="pt-0 pb-14 xl:pt-20 xl:pb-24">
      <div className="container mx-auto px-3 ">
        <h2
          data-aos-duration="3000"
          data-aos="flip-left"
          className=" text-3xl md:text-4xl mt-10 lg:text-5xl font-bold  text-center ff_philosopher text-white"
        >
          Potent Cannabis <span className="text_gridient">Alert</span>
        </h2>
        <p className="text-white text-sm md:text-base font-normal ff_montserrat text-center mt-3">
          click here to try our most potent hand picked craft cannabis
        </p>
      </div>
      <div className="potientBackgroundImage my-11  flex justify-center items-center flex-col">
        <div
          data-aos-duration="3000"
          data-aos="flip-right"
          className="group  text-center relative "
        >
          <img
            className=" group-hover:-translate-y-10 ease-in duration-500"
            src={spaveshipImage}
            alt="spaveshipImage"
          />
          <img
            className="group-hover:-translate-y-[30%] ease-in duration-500 w-16 md:w-36 absolute top-1/2 left-1/2 mb-5 -translate-x-1/2"
            src={countGif}
            alt="countGif"
          />
          <button className="absolute bottom-0 left-1/2 sm:mb-5 -translate-x-1/2 w-5/6 md:w-3/4 py-[14px] md:text-xl text-sm  px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold ">
            Take me to space cannabis
          </button>
        </div>
      </div>
    </div>
  );
};

export default PotentCannabis;
