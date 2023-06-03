import React from "react";
import latestData from "./js/Latest";
import Slider from "react-slick";
const LatestBlogs = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1800,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="latestBackgroundImage mt-16">
        <div className="container mx-auto px-3">
          <h2
            data-aos-duration="3000"
            data-aos="zoom-out-up"
            className=" text-3xl md:text-4xl mt-10 lg:text-5xl font-bold  text-center ff_philosopher text-white"
          >
            Latest <span className="text_gridient"> Blogs</span> And
            <span className="text_gridient"> News</span>
          </h2>
          <Slider
            {...settings}
            className="pt-8 md:pt-14 pb-14 md:pb-24 lg:pb-32 grid sm:grid-cols-2  lg:grid-cols-3 gap-4"
          >
            {latestData
              .map((fun) => {
                return (
                  <div className="px-2 lg:px-0">
                    <div className="rounded-[10px] flex  backdrop-blur-[9px] aboutbackground py-3 px-2 h-full">
                      <div className="flex justify-between flex-col items-start">
                        <div>
                          <img
                            data-aos-duration="3000"
                            data-aos="flip-left"
                            className="w-full"
                            src={fun.img}
                            alt="images"
                          />
                          <h6
                            data-aos-duration="3000"
                            data-aos="flip-right"
                            className="mt-[10px] ps-4 text-white text-xs font-normal ff_montserrat"
                          >
                            {fun.h6}
                          </h6>
                          <h2
                            data-aos-duration="3000"
                            data-aos="flip-up"
                            className="mt-[10px] ps-4 text-white font-semibold ff_montserrat text-xl md:text-2xl"
                          >
                            {fun.h2}
                          </h2>
                          <p
                            data-aos-duration="3000"
                            data-aos="flip-down"
                            className="ps-4 text-white text-sm md:text-base font-normal ff_montserrat"
                          >
                            {fun.para}
                          </p>
                        </div>
                        <button
                          data-aos-duration="3000"
                          data-aos="flip-right"
                          className="mt-4 mb-2 ms-4 ease-in duration-300 hover:translate-x-1 md:text-sm font-normal ff_montserrat text_gridient "
                        >
                          {fun.btn}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
              .slice(0, 3)}
          </Slider>
        </div>
      </div>
      <div className="aboutbackgroundImage pt-10 md:pt-24 pb-24 md:pb-40 lg:pb-60">
        <div className="container mx-auto px-3">
          <Slider
            {...settings}
            className="pt-8  grid sm:grid-cols-2  lg:grid-cols-3 gap-4"
          >
            {latestData
              .map((fun) => {
                return (
                  <div className="px-2 lg:px-0">
                    <img
                      data-aos-duration="3000"
                      data-aos="flip-left"
                      className="w-full"
                      src={fun.img1}
                      alt="images"
                    />
                    <h2
                      data-aos-duration="3000"
                      data-aos="flip-right"
                      className="mt-[35px] ps-4 text-center text-white font-bold ff_philosopher text-2xl md:text-[32px]"
                    >
                      <span className="text_gridient"> {fun.span}</span>
                      {fun.heading}
                      <span className="text_gridient"> {fun.span2}</span>
                    </h2>
                  </div>
                );
              })
              .slice(3, 6)}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
