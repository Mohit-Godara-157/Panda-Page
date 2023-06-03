import React from "react";
import listImage from "../assets/img//svg/listImage.svg";
import purchaseImage from "../assets/img//svg/purcahseImage.svg";
import payImage from "../assets/img//svg/payImage.svg";
import Slider from "react-slick";
const CanadaWide = () => {
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
    <div className="canadaBackgroundImage py-5 relative  lg:py-24 z-10 ">
      <div className=" w-52 h-52 bg-[#9F00FF] absolute bottom-0 -z-10 right-0 blur-[134px]"></div>
      <div className="container px-3 mx-auto">
        <div className=" h-16 canadaBackground w-full absolute top-16 left-0 -z-10"></div>
        <h2
          data-aos-duration="3000"
          data-aos="zoom-in-left"
          className=" text-3xl md:text-4xl lg:text-5xl font-bold mt-9  text-center ff_philosopher text-[#FEFCFF]"
        >
          Canada Wide <span className="text_gridient">Mail Orders</span>
        </h2>
        <p
          data-aos-duration="3000"
          data-aos="zoom-out"
          className="text-[#CBBED5] text-sm md:text-base font-normal ff_montserrat text-center mt-3"
        >
          Purple Panda offers discreet mail orders to all provinces in Canada,
          we have new list of products everyday to serve your{" "}
          <span className="lg:block">
            needs whether its recreational or medinical use. We ship the next
            business day from Monday-Thursdays, EMT payment is
          </span>{" "}
          required for all mail orders
        </p>
        <Slider
          {...settings}
          className=" grid lg:grid-cols-3 gap-24  sm:grid-cols-2 sm:gap-20 lg:gap-6 mt-24"
        >
          <div className="px-2 lg:px-0">
            <div className="relative z-10 h-full border-[1.1px] px-9 rounded-[28px] border-[#411A68] group  backdrop-blur-[6.5px] aboutbackground">
              <div className="bg-[#9A00FB] blur-[250px] rounded-full w-72 h-44 absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
              <div className="flex justify-center -translate-y-1/2">
                <div className="flex justify-center items-center ease-in duration-300 group-hover:translate-y-8 w-[155px] h-[155px]  bg-[#250B46] rounded-full">
                  <div className="h-[114px] w-[114px]   bg-white  circleShadow flex justify-center items-center rounded-full">
                    <h2
                      data-aos-duration="3000"
                      data-aos="zoom-out-up"
                      className="text-[#A020F0] text-[35px] font-semibold ff_montserrat"
                    >
                      01
                    </h2>
                  </div>
                </div>
              </div>
              <img
                data-aos-duration="3000"
                data-aos="zoom-out-down"
                className=" -translate-y-12"
                src={listImage}
                alt="listImage"
              />
              <p
                data-aos-duration="3000"
                data-aos="zoom-out-left"
                className=" -translate-y-9 text-[#BBB0C8] text-sm md:text-base font-normal ff_montserrat"
              >
                Register for an account first, then head on other to our shop
                selection
              </p>
            </div>
          </div>
          <div className="px-2 lg:px-0">
            <div className="relative z-10 h-full border-[1.1px] px-9 rounded-[28px] border-[#411A68] group  backdrop-blur-[6.5px] aboutbackground">
              <div className="bg-[#9A00FB] blur-[250px] rounded-full w-72 h-44 absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
              <div className="flex justify-center -translate-y-1/2">
                <div className="flex justify-center items-center ease-in duration-300 group-hover:translate-y-8 w-[155px] h-[155px]  bg-[#250B46] rounded-full">
                  <div className="h-[114px] w-[114px]   bg-white  circleShadow flex justify-center items-center rounded-full">
                    <h2
                      data-aos-duration="3000"
                      data-aos="zoom-out-up"
                      className="text-[#A020F0] text-[35px] font-semibold ff_montserrat"
                    >
                      02
                    </h2>
                  </div>
                </div>
              </div>
              <img
                data-aos-duration="3000"
                data-aos="zoom-out-down"
                className=" -translate-y-12"
                src={purchaseImage}
                alt="purchaseImage"
              />
              <p
                data-aos-duration="3000"
                data-aos="zoom-out-left"
                className=" -translate-y-9 text-[#BBB0C8] text-sm md:text-base font-normal ff_montserrat"
              >
                Register for an account first, then head on other to our shop
                selection
              </p>
            </div>
          </div>
          <div className="px-2 lg:px-0">
            <div className="relative z-10 h-full border-[1.1px] px-9 rounded-[28px] border-[#411A68] group  backdrop-blur-[6.5px] aboutbackground">
              <div className="bg-[#9A00FB] blur-[250px] rounded-full w-72 h-44 absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
              <div className="flex justify-center -translate-y-1/2">
                <div className="flex justify-center items-center ease-in duration-300 group-hover:translate-y-8 w-[155px] h-[155px]  bg-[#250B46] rounded-full">
                  <div className="h-[114px] w-[114px]   bg-white  circleShadow flex justify-center items-center rounded-full">
                    <h2
                      data-aos-duration="3000"
                      data-aos="zoom-out-up"
                      className="text-[#A020F0] text-[35px] font-semibold ff_montserrat"
                    >
                      03
                    </h2>
                  </div>
                </div>
              </div>
              <img className=" -translate-y-12" src={payImage} alt="payImage" />
              <p
                data-aos-duration="3000"
                data-aos="zoom-out-left"
                className=" -translate-y-9 text-[#BBB0C8] text-sm md:text-base font-normal ff_montserrat"
              >
                Register for an account first, then head on other to our shop
                selection
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CanadaWide;
