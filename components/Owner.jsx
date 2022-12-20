import React from "react";
import Image from "next/image";
import lily from "../public/nailowner.png";
import lines from "../public/wavy-lines.png";
export default function Owner() {
  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div className="">
            <h2 className="header">
              Why Flexi <br></br>Nail Spa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              At Flexi Nail Spa, we believe that everyone deserves to feel
              pampered and relaxed, which is why we offer a wide range of
              luxurious nail services in a welcoming and comfortable
              environment. Our team of skilled and professional nail technicians
              are dedicated to providing the highest quality services using only
              the best products and techniques.
            </p>
          </div>

          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <Image className="ml-auto" src={lily} alt="" />
              <Image className="absolute -top-4 -left-12" src={lines} alt="" />

              <div className="absolute -bottom-10 -left-16">
                <div className="bg-zinc-800">
                  <div className="px-8 py-10">
                    <span className="block text-4xl font-bold text-yell300 lg:text-5xl">
                      {" "}
                      100%{" "}
                    </span>
                    <span className="block mt-2 text-base leading-tight text-yell300">
                      {" "}
                      Customer
                      <br />
                      Satisfaction{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
