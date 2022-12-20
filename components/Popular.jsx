import React from "react";
import Link from "next/link";
export default function Popular() {
  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="header">Popular Packages</h2>
          <p className="subheader">
            Find out which of our nail packages are the most popular among our
            customers and give them a try for yourself!
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          <div className="overflow-hidden bg-zinc-200 border-2 border-gray-100 rounded-xl">
            <div className="p-8 xl:px-12">
              <h3 className="text-base font-semibold text-zinc-900">
                I Love Myself Pedicure
              </h3>
              <p className="text-5xl font-bold text-black mt-7">$35</p>
              <p className="mt-3 text-base text-zinc-800">Feet Service</p>

              <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Cut, File & Polish{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Sugar Scrub Exfoliate{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="h-5 text-yellow-800 flex-shrink-0w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Foot Mask{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="h-5 text-yellow-800 flex-shrink-0w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Lotion{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="pb-0.5 text-base font-medium text-zinc-800 border-black border-dashed border-b">
                    {" "}
                    Grapefruit Soak{" "}
                  </span>
                </li>
              </ul>

              <Link
                href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                title=""
                className="block items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-zinc-600 rounded-full hover:bg-opacity-50"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Book Now{" "}
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Also includes cut, file, foot scrub, callus treatment, massage,
                hot towels, & polish.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-zinc-200 border-2 border-gray-100 rounded-xl shadow-lg">
            <div className="p-8 xl:px-12">
              <h3 className="text-base font-semibold text-zinc-900">
                Herbal Detox Pedicure
              </h3>
              <p className="text-5xl font-bold text-black mt-7">$65</p>
              <p className="mt-3 text-base text-zinc-800">Feet Service</p>

              <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Organic Rosemary Soak{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Sugar Scrub Exfoliate{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Foot Mask{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Lotion{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="pb-0.5 text-base font-medium text-zinc-800 border-b border-black border-dashed">
                    {" "}
                    Epson Salt Soak{" "}
                  </span>
                </li>
              </ul>

              <Link
                href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                title=""
                className="block items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-full bg-zinc-900 hover:opacity-50"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Book Now{" "}
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Also includes cut, file, foot scrub, callus treatment, massage,
                hot towels, & polish.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-zinc-200 border-2 border-gray-100 rounded-xl">
            <div className="p-8 xl:px-12">
              <h3 className="text-base font-semibold text-zinc-900">
                Flex-I Signature Pedicure
              </h3>
              <p className="text-5xl font-bold text-black mt-7">$100</p>
              <p className="mt-3 text-base text-zinc-800">Feet Service</p>

              <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Sugar Scrub Exfoliate{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Cleanser{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Cream and Lotion{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-zinc-800">
                    {" "}
                    Foot Mask{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="pb-0.5 text-base font-medium text-zinc-800 border-b border-black border-dashed">
                    {" "}
                    Pearl Spa Soak{" "}
                  </span>
                </li>
              </ul>

              <Link
                href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                title=""
                className=" block items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-zinc-600 rounded-full hover:bg-opacity-50"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Book Now{" "}
              </Link>

              <p className="mt-4 text-sm text-gray-500">
                Also includes cut, file, foot scrub, callus treatment, massage,
                hot towels, & polish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
