import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo3.svg";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-4 bg-zinc-900 sm:py-5" x-data="{expanded: false}">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/" title="" className="">
              <Image src={logo} alt="Logo" className="h-16" />
            </Link>
          </div>

          {/* social icons */}
          <Sidebar></Sidebar>

          {/* desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-center">
            <Link
              href="/services"
              title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-zinc-300 transition-all duration-200 border border-transparent rounded-full   hover:text-yell500"
            >
              Services
            </Link>

            <Link
              href="/gallery"
              title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-zinc-300 transition-all duration-200 border border-transparent rounded-full   hover:text-yell500"
            >
              Gallery
            </Link>

            <Link
              href="/team"
              title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-zinc-300 transition-all duration-200 border border-transparent rounded-full   hover:text-yell500"
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-zinc-300 transition-all duration-200 border border-transparent rounded-full   hover:text-yell500"
            >
              Contact
            </Link>
          </div>

          {/* book button */}
          <div className="hidden ml-auto sm:flex lg:ml-0">
            <Link
              href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
              title=""
              className="inline-flex items-center justify-center px-8 py-2.5 text-base font-medium text-white transition-all duration-200 border-2 border-yell500 rounded-full hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
              role="button"
            >
              Book Now
            </Link>
          </div>

          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2.5 text-zinc-300 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* expand above */}
              {!isOpen ? (
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              ) : (
                <span x-show="expanded" aria-hidden="true">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* mobile */}
        {isOpen ? (
          <nav>
            <div className="flex flex-col pt-8 pb-4 space-y-6 text-center">
              {/* <Link href=""> */}
              <Link
                href="/services"
                title=""
                className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Services{" "}
              </Link>
              {/* </Link>

              <Link href=""> */}
              <Link
                href="/gallery"
                title=""
                className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Gallery{" "}
              </Link>
              {/* </Link>

              <Link href=""> */}
              <Link
                href="/team"
                title=""
                className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Our Team{" "}
              </Link>
              {/* </Link>

              <Link href=""> */}
              <Link
                href="/contact"
                title=""
                className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Contact{" "}
              </Link>
              {/* </Link> */}
              <div className="relative inline-flex items-center justify-center group">
                <Link
                  href="/contact"
                  title=""
                  className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-zinc-700 border border-transparent rounded-full hover:bg-opacity-90"
                  role="button"
                >
                  {" "}
                  Book now{" "}
                </Link>
                {/* </Link> */}
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
