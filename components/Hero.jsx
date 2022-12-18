import React from "react";
import Image from "next/image";
import bg from "../public/hero20.png";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative pt-48 pb-12  xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 bg-gradient-to-r from-zinc-900 to-zinc-500">
      <div className="absolute inset-0 md:translate-x-2/3 md:right-30 ">
        {/* <img className="object-cover w-full h-full" src="/bg.svg" alt="" /> */}
        <Image
          src={bg}
          alt="bg"
          // fill
          // style={{ objectFit: "cover" }}
          priority
          style={{ height: "100%" }}
          className="opacity-50 md:opacity-90 rounded-lg object-cover"
          // width={752}
          // height={749}
        />
      </div>

      <div className="relative  bottom-32">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          {/* mx-atuo */}
          <div className="max-w-xl  text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-serif italic font-normal text-9xl">
                Flexi
              </span>
              <br />
              <span className="font-normal text-8xl">Nail Spa</span>
            </h1>
            <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
              Rated Number One Nail Salon in Orlando
            </p>
            <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
              <Link
                href="/services"
                title=""
                className="
                          inline-flex
                          items-center
                          justify-center
                          px-10
                          py-2
                          font-sans
                          text-base
                          font-semibold
                          leading-6
                          transition-all
                          duration-200
                          border-2 border-zinc-300
                          rounded-full
                          sm:leading-8
                          bg-zinc-900
                          sm:text-lg
                          text-white
                          hover:bg-opacity-50
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                      "
                role="button"
              >
                Services
              </Link>

              <Link
                href="/gallery"
                title=""
                className="
                          inline-flex
                          items-center
                          justify-center
                          px-10
                          py-2
                          font-sans
                          text-base
                          font-semibold
                          leading-6
                          transition-all
                          duration-200
                          bg-transparent
                          border-2
                          rounded-full
                          sm:leading-8
                          text-white
                          border-zinc-300
                          hover:bg-zinc-700
                          hover:text-white
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                          sm:text-lg
                          focus:ring-offset-secondary
                      "
                role="button"
              >
                Nail Art
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
        <a
          href="#orlandoweekly"
          title=""
          className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-black hover:bg-zinc-900 hover:text-zinc-100 bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary animate-bounce"
          role="button"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
