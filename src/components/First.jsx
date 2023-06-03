import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import OurRange from "./OurRange";
import WeAreBased from "./WeAreBased";
import HighThought from "./HighThought";
import CanadaWide from "./CanadaWide";
import Cannabis from "./Cannabis";
import PotentCannabis from "./PotentCannabis";
import OurClassifications from "./OurClassifications";
import MostPopular from "./MostPopular";
import LatestBlogs from "./LatestBlogs";
import StoreHours from "./StoreHours";
const First = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="HeroBackgroundImage flex flex-col">
          <NavBar />
          <HeroSection />
        </div>
        <AboutUs />
        <OurRange />
        <WeAreBased />
        <HighThought />
        <CanadaWide />
        <Cannabis />
        <PotentCannabis />
        <OurClassifications />
        <MostPopular />
        <LatestBlogs />
        <StoreHours />
      </div>
    </>
  );
};

export default First;
