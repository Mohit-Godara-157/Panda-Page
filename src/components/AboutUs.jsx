import React from "react";
import mashroom from "../assets/img/svg/mashroom.svg";
import img1 from "../assets/img/svg/img1.svg";
import img2 from "../assets/img/svg/img2.svg";
import img3 from "../assets/img/svg/img3.svg";
import img4 from "../assets/img/svg/img4.svg";
import img5 from "../assets/img/svg/img5.svg";
import img6 from "../assets/img/svg/img6.svg";
import gridImage from "../assets/img/png/gridImage.png";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
  return (
    <div className="lg:py-8 py-4 relative ">
      <div className="bg-[#9F00FF] h-28 w-28 md:h-52 md:w-52 blur-[134px] absolute left-0 top-16 "></div>
      <div className="container mx-auto px-3">
        <Marquee>
          <div className="flex justify-between gap-7 xl:gap-20">
            <div className="ml-5 xl:ml-0 flex flex-col items-center">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-left"
                src={mashroom}
                alt="mashroom"
              />
              <p
                data-aos="fade-up-right"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                Mushrooms
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-left"
                src={img1}
                alt="img1"
              />
              <p
                data-aos="fade-up-right"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                Extracts
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-left"
                src={img2}
                alt="img2"
              />
              <p
                data-aos="fade-up-right"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                Vapes & <span className="block"> Accessories</span>
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-right"
                src={img3}
                alt="img3"
              />
              <p
                data-aos="fade-up-left"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                CBD
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-right"
                src={img4}
                alt="img4"
              />
              <p
                data-aos="fade-up-left"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                Edibles
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-right"
                src={img5}
                alt="img5"
              />
              <p
                data-aos="fade-up-left"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                Cannabis
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className=" md:w-full w-4/5"
                data-aos="fade-right"
                src={img6}
                alt="img6"
              />
              <p
                data-aos="fade-up-left"
                className=" text-white font-bold text-2xl ff_philosopher mt-4 text-center"
              >
                Bulk Orders
              </p>
            </div>
          </div>
        </Marquee>
      </div>
      {/* about us */}
      <div className="  pt-10 md:pt-20 lg:pt-28 pb-8 lg:pb-14 aboutbackgroundImage">
        <div className="mx-auto container px-3">
          <div className="grid items-center gap-5 xl:gap-0 lg:grid-cols-2 grid-cols-1 ">
            <div className=" rounded-[10px] aboutbackground  backdrop-blur-[9px]">
              <div className=" border-l-4 p-5 xl:p-14 my-5 border-[#BA20F7]">
                <h2
                  data-aos="fade-up"
                  className="text-[#FEFDFF] text-3xl sm:text-4xl lg:text-5xl font-normal ff_philosopher "
                >
                  About <span className="text_gridient">Us</span>
                </h2>
                <p
                  data-aos="fade-down"
                  className="mt-3 text-white text-sm lg:text-base font-normal ff_montserrat"
                >
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  <span className="lg:block">experience to our clients.</span>
                  We specialize in high-quality cannabis for both recreational
                  and medical purposes, while also making sure that you’re
                  getting the best bud for your buck! Along with all the
                  different strains of cannabis that we stock, you can also get
                  your fill of edibles, vapes, CBD, extracts, and even buy magic
                  mushrooms online from our store.
                </p>

                <button
                  data-aos="fade-left"
                  className=" py-[14px] mt-7 lg:text-xl text-sm  xl:mt-14 px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold "
                >
                  READ MORE
                </button>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex xl:justify-end justify-center"
            >
              <img
                className="xl:w-[90%] lg:w-full w-full sm:w-4/6"
                src={gridImage}
                alt="gridImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
