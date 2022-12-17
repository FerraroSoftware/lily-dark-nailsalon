import React from "react";

export default function Employees() {
  return (
    <>
      <section className="relative py-12 overflow-hidden sm:py-16 lg:py-20 xl:py-24">
        {/* <div className="absolute top-0 transform -translate-x-1/2 -translate-y-72 left-1/2">
        <svg className="blur-3xl filter" style="filter:blur(64px)" width="601" height="406" viewBox="0 0 601 406"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M441.823 197.38C522.638 295.952 665.173 299.367 566.601 380.182C468.029 460.997 97.733 332.517 16.9179 233.945C-63.8973 135.372 175.371 104.036 273.943 23.2204C372.515 -57.5947 361.007 98.808 441.823 197.38Z"
            fill="url(#d)" />
          <defs>
            <linearGradient id="d" x1="-19" y1="190.135" x2="357.241" y2="-54.7476" gradientUnits="userSpaceOnUse">
              <stop offset="0%" style="stop-color:var(--color-cyan-500);" />
              <stop offset="100%" style="stop-color:var(--color-purple-500);" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

        {/* <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full opacity-50"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
            alt=""
          />
        </div> */}

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center lg:max-w-2xl">
            <h2 className="header">Meet Our Team</h2>
            <p className="mt-6 text-lg font-normal text-zinc-300">
              Amet minim mollit non deserunt ullamco est sit aliqua
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20">
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-8.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Davina</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-3.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Lily</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Salon Owner
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest  uppercase transition-all duration-200 bg-transparent bg-gradient-to-b from-yell600 to-zinc-600 text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-4.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Jayla</p>
                <p className="text-base font-normal text-zinc-300">
                  Pedicure Specialist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-5.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Hannah</p>
                <p className="text-base font-normal text-zinc-300">
                  Threading Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* second row */}
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-8.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Davina</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-3.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Lily</p>
                <p className="text-base font-normal text-zinc-300">
                  Nail Salon Owner
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-4.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Jayla</p>
                <p className="text-base font-normal text-zinc-300">
                  Pedicure Specialist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-zinc-600 rounded hover:-translate-y-2">
              <img
                className="object-cover w-full"
                src="/nailart/nail-art-5.png"
                alt=""
              />
              <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-semibold text-yell600">Hannah</p>
                <p className="text-base font-normal text-zinc-300">
                  Threading Specalist
                </p>
              </div>
              <div className="mt-auto border-t border-yell600">
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-yell600 uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-b from-yell600 to-zinc-600 hover:text-white"
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
