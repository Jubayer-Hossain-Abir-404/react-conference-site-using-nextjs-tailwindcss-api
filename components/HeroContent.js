import Head from 'next/head';
import React from 'react';
import { server } from "../config";


const HeroContent = () => {
    const bigHeroImg = `${server}/Images/heroImage2.png`;
    const smallHeroIMg = `${server}/Images/heroImage1.png`;
    const blingLine = `${server}/Images/bling-line.png`;
    const oranamet = `${server}/Images/Ornament.jpg`;
    const star = `${server}/Images/Star.png`;
    const vector = `${server}/Images/Vector.png`;
  return (
    <div className="heroSection w-10/12  mx-auto mt-[40px] z-50">
      <div className="heroTitleSection flex flex-col">
        <div className="w-8/12">
          <img
            src={blingLine}
            alt="blingLine"
            className="-mt-12 lg:-mt-4 left-[11%] lg:left-1/3 absolute"
          />
          <img
            src={vector}
            alt="vector"
            className="absolute -z-10 lg:-z-50 left-[28%] lg:left-[40%] mt-8 w-8/12 lg:w-7/12"
          />
          <h1 className="heroTitle text-[48px] lg:text-[140px] z-50 text-end">
            React Conference
          </h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-8">
        <div className="heroSmallImage flex w-full lg:w-8/12 justify-between">
          <div className="hidden lg:block">
            <img src={smallHeroIMg} alt="" className="smallImage" />
            <img
              src={oranamet}
              alt=""
              className="absolute right-[-4px] lg:right-[64%] -mt-28 -z-20"
            />
          </div>

          <div className="heroTextButton w-full lg:w-6/12">
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
            <p className="scrollDown hidden lg:block">Scroll Down</p>
          </div>
        </div>
        <div className="heroBigImage w-full lg:w-4/12">
          <img src={bigHeroImg} alt="bigHeroImg" className="bigImage" />
          <img
            src={star}
            alt="star"
            className="absolute -mt-16 right-2 lg:right-[32%] z-50"
          />
        </div>

        <div className="flex justify-between lg:hidden mt-16 ">
          <img src={smallHeroIMg} alt="" className="smallMobileImage" />
          <img
            src={oranamet}
            alt=""
            className="mobileOrnament right-0 absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroContent