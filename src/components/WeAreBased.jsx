import React from "react";
import leaf3 from "../assets/img/svg/leaf3.svg";
import leaf4 from "../assets/img/svg/leaf4.svg";
const WeAreBased = () => {
  return (
    <div className="pt-5 lg:pt-16">
      <div className="container mx-auto px-3 overflow-hidden">
        <h3
          data-aos-duration="3000"
          data-aos="flip-right"
          className="text-center text-white ff_montserrat font-semibold text-xl md:text-2xl "
        >
          We’re based in both the{" "}
          <span className="text_gridient">Greater Toronto Area</span>, with
          <span className="md:block"> our delivery service covering: </span>
        </h3>
        <p
          data-aos-duration="3000"
          data-aos="flip-up"
          className="mt-4 text-[#B5B3BB] ff_montserrat font-normal text-center text-sm md:text-base"
        >
          If you’re in any of these cities and need a little pick me up, you
          know where to go!
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-6 relative z-10">
          <img
            className="absolute   -z-10 bottom-0 left-1/3 md:left-52 lg:left-1/3"
            src={leaf3}
            alt="leaf3"
          />
          <img
            className="absolute -z-10 top-10  -right-14"
            src={leaf4}
            alt="leaf4"
          />
          <div className="border border-[#411A68] flex flex-col justify-center backdrop-blur-[9px] items-center  rounded-[10px] aboutbackground">
            <div className="lg:py-16 py-8 md:py-12 ">
              <div className="flex items-center gap-5">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-left"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Mississauga
                </h3>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-left"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Oakville
                </h3>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-left"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Brampton
                </h3>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-left"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Etobicoke
                </h3>
              </div>
            </div>
          </div>
          <div className="border border-[#411A68] flex flex-col justify-center backdrop-blur-[9px] items-center  rounded-[10px] aboutbackground">
            <div className="lg:py-16 py-8 md:py-12 ">
              <div className="flex items-center gap-5">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-right"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Toronto
                </h3>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-right"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Vaughan
                </h3>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-right"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Markham
                </h3>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className=" h-4 w-4 rounded-full bg-gradient-to-r from-[#DD22E6] to-[#AA1FFE]"></div>
                <h3
                  data-aos-duration="3000"
                  data-aos="flip-right"
                  className="text-white ff_montserrat text-2xl md:text-3xl lg:text-[32px] font-normal"
                >
                  Richmond
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreBased;
