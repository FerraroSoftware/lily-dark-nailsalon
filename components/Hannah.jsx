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

const files = [
  {
    nailpic: "Spray Nails",
    size: "By Lily",
    source: nailart8,
  },
  {
    nailpic: "Holy Nails",
    size: "By Lily",
    source: nailart2,
  },
  {
    nailpic: "Black Dragons",
    size: "By Lily",
    source: nailart1,
  },

  {
    nailpic: "Modern Nails",
    size: "By Lily",
    source: nailart3,
  },
  {
    nailpic: "Spooky Nails",
    size: "By Lily",
    source: nailart4,
  },
  {
    nailpic: "Astrology Nails",
    size: "By Lily",
    source: nailart5,
  },
  {
    nailpic: "Colored Up",
    size: "By Lily",
    source: nailart6,
  },
  {
    nailpic: "Peace Nails",
    size: "By Lily",
    source: nailart7,
  },
  {
    nailpic: "Peace Nails",
    size: "By Lily",
    source: nailart9,
  },

  // More files...
];

export default function Hannah() {
  return (
    <>
      <section className="py-10  sm:py-16 lg:py-24">
        <h2 className="header mx-auto text-center pb-10">Hannah</h2>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl mx-auto px-10"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 ">
                <Image
                  src={file.source}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                {/* use to be button */}
                <h3
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for {file.nailpic}
                  </span>
                </h3>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-zinc-100">
                {file.nailpic}
              </p>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-zinc-400">
                {file.size}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <a
            href="https://booksy.com/en-us/472221_flex-i-nails-spa_nail-salon_134763_orlando"
            target="_blank"
            rel="noopener noreferrer"
            title=""
            className="
               inline-flex
               items-center
               justify-center
               px-5
               py-2
               font-sans
               text-base
               font-semibold
               transition-all
               duration-200
               border-2 border-transparent
               rounded-full
               sm:leading-8
               border-zinc-400
               sm:text-lg
               text-zinc-100
               hover:bg-zinc-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
           "
            role="button"
          >
            Book Hannah
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
