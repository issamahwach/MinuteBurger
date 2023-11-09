import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import CartWidget from "./CartWidget";
import MobileMenu from "./MobileMenu";

function MainHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="relative bg-gray-800/25 backdrop-filter backdrop-blur-sm px-4 py-4 rounded-lg text-white mx-4 lg:mx-24  mt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-10">
            <div className="text-white">
              <Link href="/">
                <img src="/logo-small.png" className="w-16" />
              </Link>
            </div>
            <Navigation />
          </div>
          <div className="flex flex-row items-center gap-6">
            <CartWidget />
            <Link href="/">
              <svg
                className="w-8 h-8 transition-colors text-white hover:text-yellow-400"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
