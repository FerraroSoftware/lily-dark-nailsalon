import React from "react";
import Image from "next/image";
import chairs from "../public/chairs.png";
export default function Chairsection() {
  return (
    <div className="relative pt-48 pb-12  xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <Image
          src={chairs}
          alt="bg"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}
