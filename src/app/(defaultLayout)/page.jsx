import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Offer1 from "../Components/Offer/Offer1";
import About2 from "../Components/About/About2";
import About3 from "../Components/About/About3";
import ImagesSection from "../Components/ishak/ImagesSection";
import Contact4 from "../Components/Contact/Contact4";

const page = () => {
  return (
    <div className="bg-color2">
      <HeroBanner1></HeroBanner1>
      <div className="container">
        <div className="responsive-image-container">
          <img
            src="/halloween.webp"
            alt="Halloween Special"
            className="responsive-image"
          />
        </div>
      </div>
      <Offer1></Offer1>
      <About2></About2>
      {/*       <ImagesSection />
       */}{" "}
      <About3></About3>
      <Contact4></Contact4>
    </div>
  );
};

export default page;
