import React from "react";
import StoreHours from "./StoreHours";
import NavBar from "./NavBar";
import Contact from "./Contact";
import FeelFree from "./FeelFree";
const Second = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="contactBackgroundImage ">
          <NavBar />
          <Contact />
        </div>
        <FeelFree />
        <StoreHours />
      </div>
    </>
  );
};

export default Second;
