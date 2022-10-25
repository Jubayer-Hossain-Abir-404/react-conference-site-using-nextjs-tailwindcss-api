import React from 'react'
import { server } from '../config';
import Link from 'next/link';


const Nav = () => {
    const logo = `${server}/Images/mainLogo.png`;
  return (
    <nav className="relative flex justify-between items-center w-10/12 lg:w-8/12 mx-auto py-6 z-20 mb-20">
      <div className="imageLogo">
        <Link href="/conferenceInfo">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </Link>
      </div>
      <div className="hidden lg:flex menu gap-8">
        <Link href="">About Us</Link>
        <Link href="">What We do</Link>
        <Link href="">Our Work</Link>
        <Link href="">Blog</Link>
        <Link href="">Say hi</Link>
      </div>
      <div>
        <svg
          class="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </nav>
  );
}

export default Nav