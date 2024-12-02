import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-20 w-full items-center bg-white p-4 md:h-20">
        <div className="flex w-full items-center justify-between px-4 md:px-10">
          {/* Desktop view */}

          <div className="flex-shrink-0">
            <Image src="/asset/logo.png" width={170} height={100} alt="logo" />
          </div>
          <ul className="ml-10 hidden items-center gap-10 font-openSans text-sm font-normal text-black md:flex">
            {/* Use Link for scrolling */}
            <li className="cursor-pointer">
              <Link to="about-neatly" smooth={true} duration={500}>
                About Neatly
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="service-facilities" smooth={true} duration={500}>
                Service & Facilities
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="rooms-suites" smooth={true} duration={500}>
                Rooms & Suites
              </Link>
            </li>
          </ul>
          <button className="ml-auto hidden font-openSans text-sm font-normal text-orange-500 md:block">
            Log in
          </button>

          {/* Mobile view */}
          {/* Hamburger Button*/}

          <div
            className="hamburger text-2xl text-black md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </div>

          {/* Slide-in Menu */}

          <div
            className={`fixed right-0 top-0 z-50 h-full w-full transform bg-white shadow-lg ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <Image src="/asset/logo.png" width={150} height={50} alt="logo" />
              <button className="mx-4 text-2xl text-black" onClick={toggleMenu}>
                ✕
              </button>
            </div>

            <ul className="m-8 flex flex-col items-start gap-8 font-openSans text-xl font-normal text-black">
              {/* Use Link for scrolling */}
              <li className="cursor-pointer">
                <Link
                  to="about-neatly"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  About Neatly
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="service-facilities"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Service & Facilities
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="rooms-suites"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Rooms & Suites
                </Link>
              </li>
              <hr className="my-4 w-full rounded-md border-b bg-gray-300" />
            </ul>
            <button className="mx-8 font-openSans text-xl font-semibold text-orange-500">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
