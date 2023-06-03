import React, { useState } from "react";
import footerLogo from "../assets/img/svg/footerLogo.svg";
import { Link } from "react-router-dom";
const StoreHours = () => {
  const [first, setfirst] = useState(true);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <div>
      <a
        className={
          first
            ? " fixed z-20  hidden end-0 bottom-0 "
            : " fixed z-20  end-0 bottom-0  justify-content-end flex m-3"
        }
        onClick={() => moveToTop()}
      >
        <a
          className="rotate-90 h-10 w-10 flex justify-center  text-3xl rounded-full bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6]"
          href="#"
        >
          &#8666;
        </a>
      </a>
      <div className="container mx-auto px-3">
        <h2
          data-aos-duration="3000"
          data-aos="flip-left"
          className=" text-3xl md:text-4xl  lg:text-5xl font-normal  text-center ff_philosopher text-white"
        >
          Store <span className="text_gridient"> Hours</span>
        </h2>
        <div className=" mt-10 md:mt-16 max-w-[600px] mx-auto mb-16">
          <div className="flex justify-between items-center">
            <div>
              <h4
                data-aos-duration="3000"
                data-aos="flip-right"
                className="font-semibold pb-3 text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
              >
                Mon : 10am-8pm
              </h4>
              <h4
                data-aos-duration="3000"
                data-aos="flip-right"
                className="font-semibold pb-3 mt-9 text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
              >
                Wed : 10am-8pm
              </h4>
              <h4
                data-aos-duration="3000"
                data-aos="flip-right"
                className="font-semibold pb-3 mt-9 text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
              >
                Fri : 10am-8pm
              </h4>
            </div>
            <div>
              <h4
                data-aos-duration="3000"
                data-aos="flip-left"
                className="font-semibold pb-3 text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
              >
                Tue : 10am-8pm
              </h4>
              <h4
                data-aos-duration="3000"
                data-aos="flip-left"
                className="font-semibold pb-3 mt-9 text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
              >
                Thu : 10am-8pm
              </h4>
              <h4
                data-aos-duration="3000"
                data-aos="flip-left"
                className="font-semibold pb-3 mt-9 text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
              >
                Sat : 10am-8pm
              </h4>
            </div>
          </div>
          <div className="text-center mt-9">
            <h4
              data-aos-duration="3000"
              data-aos="flip-down"
              className="font-semibold inline-block text-center pb-3  text-white min-[400px]:text-lg text-sm sm:text-2xl ff_montserrat px-3 sm:px-8 border-b border-[#851594]"
            >
              Sun : 10am-8pm
            </h4>
          </div>
        </div>
      </div>
      <div className="footerBackgroundImage relative z-10 py-4 sm:py-8">
        <div className="absolute top-0 right-0 blur-[194px] bg-[#9F00FF] w-40 h-40 -z-10 md:h-52 md:w-52"></div>
        <div className="container px-3 mx-auto">
          <div
            data-aos-duration="3000"
            data-aos="flip-up"
            className="flex justify-center"
          >
            <Link to="/ ">
              <a href="#">
                <img
                  className=" w-32 md:w-48"
                  src={footerLogo}
                  alt="footerLogo"
                />
              </a>
            </Link>
          </div>
          <p
            data-aos-duration="3000"
            data-aos="zoom-in-up"
            className="md:text-base text-sm text-white font-normal ff_montserrat text-center mt-6"
          >
            Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis
            cras massa
            <span className="lg:block">
              auctor turpis. Eget massa imperdiet sit massa. Hac sit nec.
            </span>
          </p>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="3000"
            className="flex justify-center items-center gap-5 mt-6"
          >
            <a
              className="md:text-base text-sm text-white font-semibold ease-in duration-300 hover:text-[#DD66FF] ff_montserrat "
              href="#"
            >
              SHOP
            </a>

            <a
              className="md:text-base text-sm text-white font-semibold ease-in duration-300 hover:text-[#DD66FF] ff_montserrat "
              href="#"
            >
              ABOUT
            </a>
            <Link to="/Second">
              <a
                className="md:text-base text-sm text-white font-semibold ease-in duration-300 hover:text-[#DD66FF] ff_montserrat "
                href="#"
              >
                CONTACT
              </a>
            </Link>
          </div>
        </div>
        <div className=" mt-14 h-[2px] w-full bg-gradient-to-r opacity-[0.3] from-[#98019F] to-[#6900A8]"></div>
        <p
          data-aos-duration="3000"
          data-aos="zoom-in-left"
          className="text-center mt-3 text-xs text-white font-normal ff_montserrat"
        >
          copyright2022purplepanda
        </p>
      </div>
    </div>
  );
};

export default StoreHours;
