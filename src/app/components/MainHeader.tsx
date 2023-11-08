import Link from "next/link";
import React from "react";

function MainHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="bg-gray-800/25 backdrop-filter backdrop-blur-sm px-4 py-4 rounded-lg text-gray-100 mx-4 lg:mx-24  mt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-10">
            <div className="text-white">
              <img src="/logo-small.png" className="w-16" />
            </div>
            <nav className="hidden lg:flex">
              <ul className="flex flex-row gap-4">
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>Menu</span>
                </li>
                <li>
                  <span>About</span>
                </li>
                <li>
                  <span>Reviews</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-row items-center gap-6">
            <Link href="/">
              <svg
                className="text-white w-8 h-8"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                className="w-8 h-8 text-white"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
