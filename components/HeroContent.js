import Head from 'next/head';
import React from 'react';
import { server } from "../config";
import { config } from "@fortawesome/fontawesome-svg-core";


const HeroContent = () => {
    const bigHeroImg = `${server}/Images/heroImage2.png`;
    const smallHeroIMg = `${server}/Images/heroImage1.png`;
  return (
    <div className="heroSection w-10/12  mx-auto mt-[80px] z-50">
      <div className="titleDesc flex flex-col">
        <div className="w-8/12">
          <h1 className="heroTitle text-[48px] lg:text-[140px] z-50 text-end">
            React Conference
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="heroSmallImage flex  w-8/12 justify-between">
          <img src={smallHeroIMg} alt="" />
          <div className="heroTextButton w-6/12">
            <p className="whitespace-normal">
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
              id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </p>
            <button className="heroButton flex justify-center gap-2 items-center">
              Buy Tickets
              <svg
                class="w-[20px] h-[20px] origin-center -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="heroBigImage w-4/12">
          <img src={bigHeroImg} alt="bigHeroImg" />
        </div>
      </div>
    </div>
  );
}

export default HeroContent