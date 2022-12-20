import React from "react";
import Link from "next/link";
export default function Popular() {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl px-8 mx-auto text-center md:px-0">
          <h2 className="header">Pamper Yourself</h2>
          <p className="mt-6 text-lg font-normal text-zinc-300 ">
            Make an appointment with our experienced staff for a relaxing,
            pampering experience.
          </p>
        </div>

        <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3">
          <div className="overflow-hidden border border-zinc-200 rounded-2xl">
            <div className="p-6 lg:px-10 lg:py-8">
              <h3 className="text-lg font-bold text-zinc-200 ">
                Men Sports Pedicure
              </h3>
              <p className="mt-3 text-5xl font-bold text-zinc-100 ">$55</p>
              <p className="mt-5 text-base font-normal leading-7 text-zinc-300 ">
                Best for men, pamper your feet from your long hours of work.
              </p>
              <Link
                href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3.5
                            w-full
                            mt-8
                            text-base
                            font-bold
                            text-zinc-100
                            transition-all
                            duration-200
                            border-2 border-gray-200
                            rounded-full
                            hover:bg-zinc-700
                        "
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>

              <p className="mt-8 text-base font-bold text-zinc-200 ">
                What{"'"}s included:
              </p>
              <ul className="mt-4 space-y-3 text-base font-medium text-zinc-300 ">
                <li>Ocean Soak</li>
                <li>Sugar scrub exfloiate</li>
                <li>Foot mask</li>
                <li>Calf stretch</li>
                <li>And More!</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            {/* <div className="absolute -inset-4">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div> */}
            <div className="relative overflow-hidden bg-zinc-200 border border-gray-200 rounded-2xl shadow-2xl shadow-zinc-100">
              <div className="p-6 lg:px-10 lg:py-8">
                <h3 className="text-lg font-bold text-zinc-900 ">
                  Master IG artist
                </h3>
                <p className="mt-3 text-5xl font-bold text-zinc-900 ">$65</p>
                <p className="mt-5 text-base font-normal leading-7 text-zinc-700 ">
                  Gel x with soak off perfect for anyone looking to make a
                  statement to others
                </p>
                <Link
                  href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                  title=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                                inline-flex
                                items-center
                                justify-center
                                px-8
                                py-3.5
                                w-full
                                mt-8
                                text-base
                                font-bold
                                text-zinc-100
                                bg-zinc-900
                                transition-all
                                duration-200
                                border-2 border-transparent
                                rounded-full
                                hover:bg-opacity-80
                            "
                  role="button"
                >
                  Book Now
                </Link>

                <p className="mt-8 text-base font-bold text-zinc-900 ">
                  What{"'"}s included:
                </p>
                <ul className="mt-4 space-y-3 text-base font-medium text-zinc-700 ">
                  <li>Cuticles</li>
                  <li>Shape</li>
                  <li>Full set</li>
                  <li>Gel Polish</li>
                  <li>Shapre and length included</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-zinc-200 rounded-2xl">
            <div className="p-6 lg:px-10 lg:py-8">
              <h3 className="text-lg font-bold text-zinc-200">Enterprise</h3>
              <p className="mt-3 text-5xl font-bold text-zinc-100 ">$100</p>
              <p className="mt-5 text-base font-normal leading-7 text-zinc-300 ">
                Best for those who need a day to themselves to be pampered
              </p>
              <Link
                href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
                title=""
                target="_blank"
                rel="noopener noreferrer"
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3.5
                            w-full
                            mt-8
                            text-base
                            font-bold
                            text-zinc-100
                            transition-all
                            duration-200
                            border-2 border-gray-200
                            rounded-full
                            hover:bg-zinc-700
                        "
                role="button"
              >
                Book Now
              </Link>

              <p className="mt-8 text-base font-bold text-zinc-200 ">
                What{"'"}s included:
              </p>
              <ul className="mt-4 space-y-3 text-base font-medium text-zinc-300 ">
                <li>Pearl spa 6 step process</li>
                <li>Sugar scrub exfoliate</li>
                <li>Foot mask</li>
                <li>Cream and lotion</li>
                <li>And More!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
