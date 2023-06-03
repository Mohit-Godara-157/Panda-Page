import React from "react";
import greenCannon from "../assets/img/png/greenCannabis.png";
import phoneImage from "../assets/img/svg/phoneImage.svg";
import msgImage from "../assets/img/svg/msgImage.svg";
const FeelFree = () => {
  return (
    <div className="pt-4 md:pt-7 pb-20 md:pb-36 lg:pb-44">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
          <div
            data-aos-duration="3000"
            data-aos="zoom-in-right"
            className="flex justify-center"
          >
            <img
              className="w-full sm:w-2/3 lg:w-full"
              src={greenCannon}
              alt="greenCannon"
            />
          </div>
          <div className="border border-[#411A68] backdrop-blur-[9px] rounded-[10px] aboutbackground py-7 px-4 sm:px-8">
            <h3
              data-aos-duration="3000"
              data-aos="zoom-in-up"
              className="text-white font-bold text-2xl sm:text-3xl md:text-[32px] ff_philosopher"
            >
              Feel free to <span className="text_gridient">contact us </span>
              anytime you need our help.
            </h3>
            <p
              data-aos-duration="3000"
              data-aos="zoom-in-down"
              className="mt-3 text-white font-normal md:text-base text-sm ff_montserrat "
            >
              We usually reply in 24 hours, if there is an urgent need to reach
              us. please give us a call at the number below
            </p>
            <div className=" mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-center">
              <div
                data-aos-duration="3000"
                data-aos="zoom-out"
                className=" cursor-pointer flex items-center group gap-2"
              >
                <img
                  className="ease-in duration-300 group-hover:-translate-x-2"
                  src={phoneImage}
                  alt="phoneImage"
                />
                <h5
                  data-aos-duration="3000"
                  data-aos="zoom-out-up"
                  className="text-white font-semibold md:text-base text-xs sm:text-sm ff_montserrat"
                >
                  1-888-726-3219
                </h5>
              </div>
              <div
                data-aos-duration="3000"
                data-aos="zoom-out"
                className=" cursor-pointer flex items-center group gap-2"
              >
                <img
                  className="ease-in duration-300 group-hover:-translate-x-2"
                  src={msgImage}
                  alt="msgImage"
                />
                <h5
                  data-aos-duration="3000"
                  data-aos="zoom-out-up"
                  className="text-white font-semibold md:text-base text-xs sm:text-sm ff_montserrat"
                >
                  purplepandagta.info@proton.me
                </h5>
              </div>
            </div>
            <div className=" mt-10 flex flex-col sm:flex-row  gap-3 items-center">
              <div className="w-full sm:w-1/2">
                <form>
                  <input
                    data-aos-duration="3000"
                    data-aos="zoom-out-left"
                    type="text"
                    className="text-[#716D7F] font-normal w-full py-[10px] px-8 border outline-none  border-[#411A68] rounded backdrop-blur-[9px] aboutbackground md:text-base text-sm ff_montserrat "
                    placeholder="First name"
                  />
                  <input
                    data-aos-duration="3000"
                    data-aos="zoom-out-left"
                    type="emial"
                    className="text-[#716D7F] font-normal w-full py-[10px] px-8 border outline-none mt-3 border-[#411A68] rounded backdrop-blur-[9px] aboutbackground md:text-base text-sm ff_montserrat "
                    placeholder="Email address"
                  />
                </form>
              </div>
              <div className="w-full sm:w-1/2">
                <form>
                  <input
                    data-aos-duration="3000"
                    data-aos="zoom-out-left"
                    type="text"
                    className="text-[#716D7F] font-normal w-full py-[10px] px-8 border outline-none border-[#411A68] rounded backdrop-blur-[9px] aboutbackground md:text-base text-sm ff_montserrat "
                    placeholder="Last name"
                  />
                  <input
                    data-aos-duration="3000"
                    data-aos="zoom-out-left"
                    type="number"
                    className="text-[#716D7F] font-normal w-full py-[10px] px-8 border outline-none mt-3 border-[#411A68] rounded backdrop-blur-[9px] aboutbackground md:text-base text-sm ff_montserrat "
                    placeholder="Phone number"
                  />
                </form>
              </div>
            </div>
            <form className="mt-3">
              <textarea
                data-aos-duration="3000"
                data-aos="zoom-out-right"
                rows="5"
                className="text-[#716D7F] resize-none font-normal w-full py-[10px] px-8 border outline-none  border-[#411A68] rounded backdrop-blur-[9px] aboutbackground md:text-base text-sm ff_montserrat "
                placeholder="Message..."
              ></textarea>
            </form>
            <button
              data-aos-duration="3000"
              data-aos="zoom-out-down"
              className="md:mt-12 mt-8 py-[14px] md:text-xl text-sm  px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold "
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelFree;
