import React from "react";
import Link from "next/link";
import Image from "next/image";
import nailart1 from "../public/nailart/nail-art-1.png";
import nailart2 from "../public/nailart/nail-art-2.png";
import nailart3 from "../public/nailart/nail-art-3.png";
import nailart4 from "../public/nailart/nail-art-4.png";
import nailart5 from "../public/nailart/nail-art-5.png";
import nailart6 from "../public/nailart/nail-art-6.png";
import nailart7 from "../public/nailart/nail-art-7.png";
import nailart8 from "../public/nailart/nail-art-8.png";
import nailart9 from "../public/nailart/nail-art-9.png";

export default function Employees() {
  return (
    <>
      <section className="relative py-12 overflow-hidden sm:py-16 lg:py-20 xl:py-24">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center lg:max-w-2xl">
            <h2 className="header">Meet Our Team</h2>
            <p className="mt-6 text-lg font-normal text-zinc-300">
              Book one of our talented nail technicians for your next
              appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20">
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart8} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Davina</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart3} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Lily</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Salon Owner
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest  uppercase transition-all duration-200 bg-transparent bg-gradient-to-b from-yell600 to-zinc-600 text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart4} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Jayla</p>
                <p className="text-base font-normal text-zinc-300">
                  Pedicure Specialist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart5} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Hannah</p>
                <p className="text-base font-normal text-zinc-300">
                  Threading Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando/staffer/791281#ba_s=bd_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* second row */}
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart8} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Davina</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart3} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Lily</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Salon Owner
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart4} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Jayla</p>
                <p className="text-base font-normal text-zinc-300">
                  Pedicure Specialist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <Image className="object-cover w-full" src={nailart5} alt="" />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Hannah</p>
                <p className="text-base font-normal text-zinc-300">
                  Threading Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-12 justify-center">
            <Link
              href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
              target="_blank"
              rel="noopener noreferrer"
              title=""
              className="
            inline-flex
            items-center
            justify-center
            px-14
            py-2
            text-base
            font-semibold
            transition-all
            duration-200
            border-2 border-transparent
            rounded-full
            sm:leading-8
            bg-zinc-600
            sm:text-lg
            text-white
            hover:bg-opacity-80"
              role="button"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
