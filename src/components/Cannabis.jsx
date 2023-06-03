import React from "react";
import gridImage2 from "../assets/img/png/gridImage2.png";
const Cannabis = () => {
  return (
    <div className="cannabisbackgroundImage py-14">
      <div className="container mx-auto px-3">
        <h2
          data-aos-duration="3000"
          data-aos="zoom-out-right"
          className=" text-3xl md:text-4xl mt-10 lg:text-5xl font-bold  text-center ff_philosopher text-white"
        >
          Cannabis
        </h2>
        <p
          data-aos-duration="3000"
          data-aos="fade-up"
          className="text-white text-sm md:text-base font-normal ff_montserrat text-center mt-3"
        >
          While we stock all sorts of products to make you feel great, we’re
          experts and lovers of cannabis at
          <span className="lg:block">
            heart. We offer a wide range of buds each with different highs,
            flavors, and aromas, so you can find
          </span>
          the perfect joint-filler, bowl-packer, or pipe clearer to suit your
          tastes
        </p>
        <div className="  pt-10 md:pt-16 pb-8 lg:pb-14  ">
          <div className="grid items-center gap-5 xl:gap-0 lg:grid-cols-2 grid-cols-1 ">
            <div className=" rounded-[10px] aboutbackground  backdrop-blur-[9px]">
              <div className=" border-l-4 p-5 xl:p-10 my-5 border-[#BA20F7]">
                <h2
                  data-aos-duration="3000"
                  data-aos="fade-down"
                  className="text-[#FEFDFF]  text-2xl md:text-3xl lg:text-[32px] font-semibold ff_montserrat "
                >
                  Strain <span className="text_gridient">Families</span>
                </h2>
                <p
                  data-aos-duration="3000"
                  data-aos="fade-left"
                  className="mt-3 text-white text-sm lg:text-base font-normal ff_montserrat"
                >
                  We stock the three main families of cannabis at Purple Panda,
                  each of which has its own qualities.
                </p>
                <div
                  data-aos-duration="3000"
                  data-aos="fade-right"
                  className="flex  gap-4 mt-8"
                >
                  <h3 className="font-semibold ff_montserrat text-white text-lg md:text-2xl ">
                    Indica:
                  </h3>
                  <p className="font-normal ff_montserrat text-white text-sm md:text-base">
                    These are your bedtime buds, great for relaxing at the end
                    of the day and for treating stress and anxiety.
                  </p>
                </div>
                <div
                  data-aos-duration="3000"
                  data-aos="fade-right"
                  className="flex  gap-4 mt-9"
                >
                  <h3 className="font-semibold ff_montserrat text-white text-lg md:text-2xl ">
                    Sativa:
                  </h3>
                  <p className="font-normal ff_montserrat text-white text-sm md:text-base">
                    Smoke up some Sativa for a boost of energy and creativity,
                    perfect for a sunny summer’s day with friends!
                  </p>
                </div>
                <div
                  data-aos-duration="3000"
                  data-aos="fade-right"
                  className="flex  gap-4 mt-9"
                >
                  <h3 className="font-semibold ff_montserrat text-white text-lg md:text-2xl ">
                    Hybrid:
                  </h3>
                  <p className="font-normal ff_montserrat text-white text-sm md:text-base">
                    Get the best of both worlds with our Hybrid range, bringing
                    together the sensations and flavors of Indica and Sativa for
                    something totally unique.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-duration="3000"
              data-aos="fade-zoom-in"
              className="flex xl:justify-end justify-center"
            >
              <img
                className="xl:w-[90%] lg:w-full w-full sm:w-4/6"
                src={gridImage2}
                alt="gridImage2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cannabis;
