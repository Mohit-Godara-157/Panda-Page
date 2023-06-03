import React from "react";
import pandaImage from "../assets/img/png/pandaImage.png";
import smokeGif from "../assets/img/svg/smokeGif.gif";
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:h-screen flex-grow py-7 lg:py-0">
      <div className="container mx-auto px-3">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="w-full">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="3000"
              className="ff_philosopher text-4xl sm:text-5xl lg:text-6xl font-bold text-white xl:text-[80px]"
            >
              Setting a <span className=" text_gridient">'High'</span> Standard
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="mt-4 text-white ff_montserrat text-sm sm:text-base  font-normal"
            >
              We at Purple Panda are passionate about becoming the best
              <span className="lg:block">
                online weed dispensary Canada has ever seen. We believe in
              </span>
              good products, fair pricing, and top-notch customer service
            </p>

            <button
              data-aos="zoom-in-right"
              data-aos-duration="3000"
              className=" py-[14px] md:text-xl text-sm  lg:mt-14 mt-8 px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold "
            >
              SIGN IN
            </button>
          </div>
          <div className="w-full sm:flex justify-center relative">
            <img
              data-aos="zoom-in-down"
              data-aos-duration="3000"
              className="absolute rounded-bl-full sm:w-40 sm:left-12 md:top-14 md:left-12 lg:top-5 lg:-left-16 xl:top-20 xl:-left-7 top-14  left-0 w-20  md:w-52 2xl:w-60  "
              src={smokeGif}
              alt="smokeGif"
            />
            <img
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="w-full sm:w-3/4 lg:w-full"
              src={pandaImage}
              alt="pandaImage"
            />
            <div className="pandaBackground h-28 md:h-40 lg:h-48 w-full absolute -bottom-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
