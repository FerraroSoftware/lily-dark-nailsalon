import React from "react";
import Image from "next/image";
import flexi from "../public/flexi-makes-you-sexi.png";
export default function Nailbar() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20">
          <div className="lg:col-span-3 lg:order-last">
            <div className="relative overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src={flexi}
                alt=""
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              The Nail Bar
            </h2>
            <p className="mt-8 text-xl font-normal text-white">
              Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yell600 to-zinc-300">
                Best Nail Services
              </span>{" "}
              at Our Nail Bar
            </p>
            <p className="mt-8 text-lg font-normal text-gray-400">
              At our nail bar, we pride ourselves on offering the highest
              quality nail services in a relaxing and luxurious setting. Our
              skilled and professional nail technicians use only the best
              products and techniques to ensure that your nails look and feel
              their best. Whether you are looking for a basic manicure or a more
              elaborate nail design, we have something for everyone.
            </p>

            <hr className="mt-8 border-gray-800 sm:mt-12" />

            <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 sm:mt-12 gap-x-12 gap-y-8 sm:gap-y-12">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="url(#paint0_linear_515_2603)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_515_2603"
                      x1="5"
                      y1="7"
                      x2="20.3943"
                      y2="10.1196"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E9B949" />
                      <stop offset="1" stop-color="#E9B949" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-4 text-lg font-normal text-white">
                  {" "}
                  Professional Nail Technicians{" "}
                </span>
              </li>

              <li className="flex items-start">
                <svg
                  className="w-6 h-6 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="url(#paint0_linear_515_2603)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_515_2603"
                      x1="5"
                      y1="7"
                      x2="20.3943"
                      y2="10.1196"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E9B949" />
                      <stop offset="1" stop-color="#E9B949" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-4 text-lg font-normal text-white">
                  {" "}
                  Nail treatments and art services{" "}
                </span>
              </li>

              <li className="flex items-start">
                <svg
                  className="w-6 h-6 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="url(#paint0_linear_515_2603)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_515_2603"
                      x1="5"
                      y1="7"
                      x2="20.3943"
                      y2="10.1196"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E9B949" />
                      <stop offset="1" stop-color="#E9B949" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-4 text-lg font-normal text-white">
                  {" "}
                  High-end nail polish selection{" "}
                </span>
              </li>

              <li className="flex items-start">
                <svg
                  className="w-6 h-6 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="url(#paint0_linear_515_2603)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_515_2603"
                      x1="5"
                      y1="7"
                      x2="20.3943"
                      y2="10.1196"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E9B949" />
                      <stop offset="1" stop-color="#E9B949" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-4 text-lg font-normal text-white">
                  {" "}
                  Spa pedicure chairs{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
