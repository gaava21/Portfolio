"use client";

import { useState } from "react";
import Image from "next/image";

import gs2 from "@/public/images/gs2.png";
import gs3 from "@/public/images/gs3.png";
import gs4 from "@/public/images/gs4.png";
import gs5 from "@/public/images/gs5.png";

const images = [gs2, gs3, gs4, gs5];

export default function CylinderGallery() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const next = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
      <button
        onClick={prev}
        className="absolute left-0 z-20 rounded-full bg-gray-800/80 px-4 py-3 text-white hover:bg-indigo-600"
      >
        ←
      </button>

      <div className="relative h-[520px] w-[900px] [perspective:1000px]">
        <div
          key={index}
          className="absolute inset-0 transition-all duration-700 [transform-style:preserve-3d] animate-cylinder"
        >
          <Image
            src={images[index]}
            alt="Project image"
            fill
            className="rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-0 z-20 rounded-full bg-gray-800/80 px-4 py-3 text-white hover:bg-indigo-600"
      >
        →
      </button>
    </div>
  );
}