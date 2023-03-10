import React from "react";
import Link from "next/link";
import Image from "next/image";
import nails from "../public/nails.png";
import orlando from "../public/orlando-weekly.png";
export default function BestNail() {
  return (
    <section className="py-12  sm:py-16 lg:py-20" id="orlandoweekly">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-16 gap-y-10">
          <div className="-mx-4 sm:mx-0 order-last md:order-first">
            <Image
              className="w-full max-w-md mx-auto"
              src={nails}
              alt="nails"
            />
          </div>

          <div className="xl:pr-24">
            <Image
              className="w-auto h-auto rounded-lg"
              src={orlando}
              alt="orlando weekly"
            />

            <blockquote className="mt-8 md:mt-16">
              <p className="text-xl font-medium leading-relaxed text-yellow-400 ">
                “Best Day Spa 2022” - Orlando Weekly
              </p>
            </blockquote>

            <blockquote className="mt- md:mt-10">
              <p className="text-lg font-normal leading-relaxed text-zinc-200 ">
                “Our goal is give you a luxary experience and ensure the best
                quality products. At our nail salon, we strive to provide the
                highest level of customer satisfaction. We are dedicated to
                using the best quality products and providing a clean and
                comfortable environment for our clients. We take pride in our
                work and aim to exceed your expectations every time you visit
                us. We are pleased to announce that we have been rated number
                one in
                <Link
                  // href="https://www.orlandoweekly.com/best-of/2019/goods-and-services/best-nail-salon-manicure-pedicure-25854723"
                  href="https://www.orlandoweekly.com/best-of/2022/health-beauty-wellness/best-day-spa-32360500"
                  className="text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Orlando Weekly{" "}
                </Link>{" "}
                for best day spa. Thank you for choosing us for all of your
                needs.”
              </p>
            </blockquote>

            <p className=" text-base font-bold text-yellow-200 mt-2">
              Lily, Owner at Flexi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
