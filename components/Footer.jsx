import React from "react";
import Link from "next/link";
import Image from "next/image";
import phone from "../public/phone.svg";
import hours from "../public/hours-of-operation.svg";
export default function Footer() {
  return (
    <footer className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h5 className="max-w-xl text-3xl font-bold text-white sm:text-4xl xl:text-5xl ">
            FLEXI MAKES <br></br>YOU SEXI
          </h5>

          <div className="max-w-sm mt-8 md:mt-0">
            <ul className="space-y-7">
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-zinc-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-5 text-lg font-normal text-zinc-300 hover:text-yell500">
                  {" "}
                  <Link
                    href="https://goo.gl/maps/8rffFXJEeEy7Yj5F9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    3402 Technological Ave Suite 208, Orlando, FL 32817
                  </Link>
                </span>
              </li>

              <li className="flex items-start">
                <Image src={phone} alt="" />
                <span className="ml-5 text-lg font-normal text-zinc-300 hover:text-yell500">
                  {" "}
                  <Link href="tel:4074208468">(407)-420-8468</Link>
                </span>
              </li>
              <li className="flex items-start">
                <Image src={hours} alt="" />
                <span className="ml-5 text-lg font-normal text-zinc-300">
                  {" "}
                  Monday - Saturday: 10:00 AM - 7:00 PM Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-yell500 md:mt-20" />

        <div className="mt-10 lg:flex lg:items-center lg:justify-between md:mt-16">
          <ul className="flex items-center space-x-6 sm:space-x-12">
            <li>
              <Link
                href="/services"
                title=""
                className="text-lg font-medium text-zinc-300 transition-all duration-200  hover:text-yell500"
              >
                {" "}
                Services{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                title=""
                className="text-lg font-medium text-zinc-300 transition-all duration-200  hover:text-yell500"
              >
                {" "}
                Gallery{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/team"
                title=""
                className="text-lg font-medium text-zinc-300 transition-all duration-200  hover:text-yell500"
              >
                {" "}
                Our Team{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                title=""
                className="text-lg font-medium text-zinc-300 transition-all duration-200  hover:text-yell500"
              >
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
          <div className="p-4 lg:p-0"></div>
          <Link
            className="mt-8 text-lg font-normal text-zinc-300 lg:mt-0 hover:text-yell500"
            href="https://www.ferrarosoftware.com/"
          >
            © Created by Ferraro Software
          </Link>
        </div>
      </div>
    </footer>
  );
}
