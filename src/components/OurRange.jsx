import React from "react";
import leaf1 from "../assets/img/svg/leaf1.svg";
import leaf2 from "../assets/img/svg/leaf2.svg";
import greenCanon from "../assets/img/png/greenCannabis.png";
const OurRange = () => {
  return (
    <div className=" lg:mt-28 mt-10 md:mt-16 relative z-10">
      <div className="bg-[#9F00FF] md:w-52 md:h-52 w-24 h-24 blur-[134px] absolute right-0 top-1/3"></div>
      <div className="container mx-auto px-3 relative z-10">
        <img
          className=" bottom-1 absolute w-1/4 lg:w-[15%] -z-10 left-4"
          src={leaf1}
          alt="leaf1"
        />
        <img
          className=" top-4 absolute w-1/3 lg:w-[22%] -z-10 right-4"
          src={leaf2}
          alt="leaf2"
        />
        <div className="border border-[#411A68] py-8 lg:py-16 rounded-[10px] aboutbackground  backdrop-blur-[9px] ">
          <h3
            data-aos-duration="3000"
            data-aos="fade-up-right"
            className="text-center text-3xl md:text-4xl lg:text-5xl text-white font-bold ff_philosopher   "
          >
            Our <span className="text_gridient">Range</span>
          </h3>
          <p
            data-aos-duration="3000"
            data-aos="fade-up-left"
            className="mx-auto max-w-[703px] px-2 md:px-0 text-center text-white ff_montserrat font-normal md:text-base text-sm md:mt-12 mt-8 "
          >
            We have a variety of different recreational and medicinal items in
            our range, including cannabis, vapes, edibles, magic mushrooms,
            extracts, and CBD products, to help you unwind, have fun, and even
            do some valuable soul searching.
            <span className="block mt-5">
              Whether you’re looking to order edibles online or browse for your
              new favorite strain, Purple Panda has got you covered.
            </span>
          </p>
        </div>
      </div>
      <div className=" pt-4 md:pt-8 pb-20 lg:pb-10  ">
        <div className="mx-auto container px-3">
          <div className="grid items-center gap-5 xl:gap-0 lg:grid-cols-2 grid-cols-1 ">
            <div
              data-aos-duration="3000"
              data-aos="fade-down-left"
              className="flex xl:justify-end justify-center"
            >
              <img
                className=" lg:w-full w-full sm:w-4/6"
                src={greenCanon}
                alt="greenCanon"
              />
            </div>
            <div className=" rounded-[10px] aboutbackground  backdrop-blur-[9px]">
              <div className=" border-l-4 p-4 xl:p-8 my-5 border-[#BA20F7]">
                <h2
                  data-aos-duration="3000"
                  data-aos="fade-down-right"
                  className="text-[#FEFDFF] text-3xl sm:text-4xl lg:text-5xl font-normal ff_philosopher "
                >
                  <span className="text_gridient">Express</span> Cannabis
                  <span className="block"> Delivery</span>
                </h2>
                <p
                  data-aos-duration="3000"
                  data-aos="flip-left"
                  className="mt-3 text-white text-sm lg:text-base font-normal ff_montserrat"
                >
                  One of the ways that we set ourselves apart from your average
                  dispensary is through our express delivery service. We’ve all
                  been there – work has finished early and you’ve gotten home,
                  but your jar is empty and the nearest dispensary is miles
                  away. With our service, you could have a box of premium
                  pre-rolls, a bag of bodacious buds, or a package of enticing
                  edibles at your door in just three hours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRange;
