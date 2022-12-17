import React from "react";
import Image from "next/image";
import gradient from "../public/gradient.png";
export default function Getintouch() {
  return (
    <section className="relative py-12 overflow-hidden sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute top-0 left-0 -translate-x-48">
        <Image src={gradient} alt="gradient splash"></Image>
      </div>

      {/* <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div> */}

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Need help? Get in touch
          </h2>
          <p className="mt-4 text-base font-normal text-gray-400 sm:text-lg">
            Tell us what is on your mind
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 lg:grid-cols-6 lg:gap-x-24 gap-y-12">
          <div className="space-y-8 lg:space-y-12 lg:col-span-2 lg:order-last">
            <div>
              <h3 className="text-xl font-normal text-white sm:text-2xl hover:text-yell500">
                <a href="#" title="" className="">
                  {" "}
                  +1 (407) 420 8468{" "}
                </a>
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Call us directly if you need any urgent help. We are ready to
                help you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-white sm:text-2xl hover:text-yell500">
                <a href="#" title="" className="">
                  {" "}
                  3402 Technological Ave Suite 208, Orlando, FL 32817{" "}
                </a>
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Come see us for your next visit
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <div>
                <label for="" className="text-base font-normal text-white">
                  {" "}
                  Your name{" "}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your full name"
                    className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-zinc-800 border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"
                  />
                </div>
              </div>
              <div>
                <label for="" className="text-base font-normal text-white">
                  {" "}
                  Your email{" "}
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                    className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-zinc-800 border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label for="" className="text-base font-normal text-white">
                  {" "}
                  Message{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    name=""
                    id=""
                    placeholder="Write your message"
                    rows="4"
                    className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-zinc-900 border border-gray-800 rounded-md resize-y "
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-zinc-400 hover:contrast-150 filter "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
