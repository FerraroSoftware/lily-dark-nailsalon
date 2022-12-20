import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  let [categories] = useState({
    Pedicures: [
      {
        id: 1,
        title: "Classic Manicure",
        description: "file, trim, buff, cuticle care and massage",
        price: 20,
        commentCount: 20,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Collagen Manicure",
        description:
          "file, trim, buff, cuticle care, massage & collagen gloves",
        price: 30,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "Collagen Manicure",
        description:
          "classic manicure with gel polish and removal of previous gel. Note: special shaping (coffin, stiletto, almond, tapered square) add and french is are additional prices",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "Dip Powder on natural nail",
        description: "Gel Polish Manicure on natural nail",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "Dip Powder with tip extension",
        description: "Gel Polish Manicure on natural nail",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 5,
        title: "Dip Powder French on natural nail",
        description: "Gel Polish Manicure on natural nail",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 6,
        title: "Dip Powder Manicure",
        description:
          "classic manicure with dip powder on natural nail & removal of previous dip",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 7,
        title: "Dip Powder w/Gel Polish",
        description:
          "clear dip powder with gel polish on top.  Nail removal: Length Med $5, Long $10",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 8,
        title: "Acrylic fill in",
        description: "with gel polish",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 9,
        title: "Acrylic full set",
        description: "with gel polish",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 10,
        title: "Gel x",
        description:
          "Cuticles, shape, full set, & gel polish. Shape and length included",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 11,
        title: "Gel x with soak off",
        description:
          "Cuticles, shape, full set, & gel polish. Shape and length included. Removal of old Gel x.",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 12,
        title: "Acrylic Gel full set",
        description: "Cuticles, shape, full set, & gel polish.",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 13,
        title: "Acrylic Gel fill in",
        description: "Cuticles, shape,  & gel polish",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 14,
        title: "Ombre",
        description: "Gel Polish Manicure on natural nail",
        price: 40,
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Manicures: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        description: "Jan 7",
        price: 20,
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        description: "Mar 19",
        price: 20,
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Waxing: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        description: "2d ago",
        price: 20,
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        description: "4d ago",
        price: 20,
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Threading: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        description: "2d ago",
        price: 20,
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        description: "4d ago",
        price: 20,
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Extras: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        description: "2d ago",
        price: 20,
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        description: "4d ago",
        price: 20,
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div
      className="w-full lg:max-w-5xl md:max-w-3xl max-w-2xl px-2 py-16 sm:px-0 mx-auto"
      id="pricinglist"
    >
      <div className="max-w-2xl pb-10 mx-auto text-center">
        <h2 className="header">Our Services</h2>
        <p className="mt-6 text-lg font-normal text-zinc-300 ">
          Make an appointment with our experienced staff for a relaxing,
          pampering experience.
        </p>
      </div>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-zinc-700 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-zinc-900",
                  selected
                    ? "bg-white shadow"
                    : "text-gray-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl  p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none "
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-zinc-800"
                  >
                    <h3 className="text-sm font-medium leading-5 text-zinc-100">
                      {post.title}{" "}
                      <span className="text-yell400">${post.price}</span>
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-zinc-400">
                      <li>{post.description}</li>
                    </ul>

                    {/* <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-pink-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    /> */}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-zinc-600 border border-transparent rounded-full sm:w-auto hover:bg-zinc-700 focus:bg-zinc-700"
          role="button"
        >
          {" "}
          Book Now{" "}
        </a>

        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-transparent border-2 border-zinc-600 rounded-full sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white"
          role="button"
        >
          See Team Members
        </a>
      </div>
    </div>
  );
}
