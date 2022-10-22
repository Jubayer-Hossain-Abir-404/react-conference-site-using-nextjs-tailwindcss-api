import React from 'react';
import { server } from "../config";

const HeroContent = () => {
    const bigHeroImg = `${server}/Images/heroImage2.png`;
    const smallHeroIMg = `${server}/Images/heroImage1.png`;
  return (
    <div className="heroSection w-9/12 mx-auto mt-[80px] z-20">
      <div className="titleDesc flex flex-col">
        <div className="">
          <h1 className="heroTitle text-end">React Conference</h1>
        </div>
        <div className="heroDesc mx-auto">
          <p>
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum..id fermentum.In quis diam turpis quam id fermentum.
          </p>
        </div>
        <button className="heroButton mx-auto">Buy Tickets</button>
      </div>
      <div className="flex justify-between">
        <div className='heroSmallImage relative'>
            <img src={smallHeroIMg} alt="" />
        </div>
        <div className="heroBigImage">
          <img src={bigHeroImg} alt="bigHeroImg" />
        </div>
      </div>
    </div>
  );
}

export default HeroContent