import React from 'react';
import { server } from "../config";

const HeroContent = () => {
    const bigHeroImg = `${server}/Images/heroImage2.png`;
    const smallHeroIMg = `${server}/Images/heroImage1.png`;
  return (
    <div className="heroSection w-11/12 lg:w-9/12 mx-auto mt-[80px] z-20">
      <div className="titleDesc flex flex-col">
        <div className="w-9/12">
          <h1 className="heroTitle text-[48px] lg:text-[140px] z-50 text-end">
            React Conference
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="heroSmallImage flex justify-between">
          <img src={smallHeroIMg} alt="" />
          <div>
            <p>
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
              id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </p>
          </div>
        </div>
        <div className="heroBigImage">
          <img src={bigHeroImg} alt="bigHeroImg" />
        </div>
      </div>
    </div>
  );
}

export default HeroContent