import Link from "next/link";
import React from "react";

export default function Previewservices() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-left sm:max-w-4xl sm:mx-auto sm:text-center">
          <h2 className="">
            <span className="header"> Our Services </span>
          </h2>
          <p className="subheader">
            Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-16 text-center lg:grid-cols-3 lg:max-w-none">
          <div className="relative overflow-hidden transition-all duration-200 border-2 rounded-lg border-zinc-300 hover:bg-dark-gray group">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src="/pedicure.png"
                alt=""
              />
            </div>
            <div className="p-6 xl:px-8 xl:py-6">
              <h3 className="font-sans text-2xl font-normal text-white">
                Pedicures
              </h3>
              <p className="mt-2 text-lg font-normal text-opacity-50 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center mt-10 font-sans text-base font-normal text-white"
              >
                See Pricing
                <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-yellow-200 group-hover:text-black">
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-200 border-2 rounded-lg border-zinc-300 hover:bg-dark-gray group">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 scale-105"
                src="/manicures.png"
                alt=""
              />
            </div>
            <div className="p-6 xl:px-8 xl:py-6">
              <h3 className="font-sans text-2xl font-normal text-white">
                Manicures
              </h3>
              <p className="mt-2 text-lg font-normal text-opacity-50 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center mt-10 font-sans text-base font-normal text-white"
              >
                See Pricing
                <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-yellow-200 group-hover:text-black">
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-200 border-2 rounded-lg border-zinc-300 hover:bg-dark-gray group">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src="/wax.png"
                alt=""
              />
            </div>
            <div className="p-6 xl:px-8 xl:py-6">
              <h3 className="font-sans text-2xl font-normal text-white">
                Waxing
              </h3>
              <p className="mt-2 text-lg font-normal text-opacity-50 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center mt-10 font-sans text-base font-normal text-white"
              >
                See Pricing
                <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-yellow-200 group-hover:text-black">
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
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
            hover:bg-zinc-300
            hover:text-zinc-900
            
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
           "
            role="button"
          >
            See All Services
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
