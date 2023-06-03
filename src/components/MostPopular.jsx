import React from "react";
import mydata from "./js/MostData";
import Slider from "react-slick";
const MostPopular = () => {
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
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
    <div className="popularBackgroundImage lg:py-20 relative z-10 py-6 md:py-10">
      <div className="absolute top-0 left-0 blur-[194px] bg-[#9F00FF] w-40 h-40 -z-10 md:h-52 md:w-52"></div>
      <div className="container mx-auto px-3">
        <h2
          data-aos-duration="3000"
          data-aos="zoom-out-up"
          className=" text-3xl md:text-4xl mt-10 lg:text-5xl font-bold  text-center ff_philosopher text-white"
        >
          Most <span className="text_gridient">Popular</span> Items
        </h2>
        <p
          data-aos-duration="3000"
          data-aos="zoom-out-down"
          className="text-white text-sm md:text-base font-normal ff_montserrat text-center mt-3"
        >
          Pellentesque tincidunt fermentum mauris dignissim quam
          <span className="lg:block">
            arcu. A netus natoque urna vivamus faucibus. Sollicitudin et nisl.
          </span>
        </p>
        <Slider
          {...settings}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9"
        >
          {mydata
            .map((fun) => {
              return (
                <div className="px-2 xl:px-0">
                  <div className="rounded-[10px] backdrop-blur-[9px] aboutbackground py-3 px-2">
                    <img
                      data-aos-duration="3000"
                      data-aos="zoom-out-up"
                      className="w-full"
                      src={fun.img}
                      alt="img1"
                    />
                    <h3
                      data-aos-duration="3000"
                      data-aos="zoom-out-down"
                      className="text-white mt-3 font-normal md:text-2xl lg:text-xl xl:text-2xl text-xl ff_montserrat"
                    >
                      {fun.heading}
                    </h3>
                    <h3
                      data-aos-duration="3000"
                      data-aos="zoom-out-left"
                      className="text_gridient font-bold md:text-2xl text-xl ff_montserrat"
                    >
                      {fun.para}
                    </h3>
                    <button
                      data-aos-duration="3000"
                      data-aos="zoom-out-right"
                      className="mt-10 mb-6 py-[14px] md:text-xl text-sm  px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold "
                    >
                      {fun.btn}
                    </button>
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </Slider>
      </div>
    </div>
  );
};

export default MostPopular;
