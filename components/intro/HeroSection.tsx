// components/intro/HeroSection.tsx
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-5xl w-4/5 mx-auto flex flex-col gap-8 items-center md:items-start text-center md:text-left">
        <div className="relative">
          <div className="absolute w-6 h-6 bg-black left-1/2 rotate-45 -translate-x-1/2 -bottom-2" />
          <span className="text-white font-semibold bg-black rounded-lg py-2 px-4 relative">
            WOW!
          </span>
        </div>

        <h2 className="text-6xl font-black leading-[1.2]">Hello, World!</h2>

        <p className="text-xl text-gray-400 font-light max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          explicabo ullam laudantium placeat ratione nam doloremque.
        </p>

        <div>
          <Link href={"/about"} legacyBehavior>
            <a>
              <button className="py-2 px-4 font-semibold border-black border rounded-full hover:bg-black hover:text-white">
                About Me
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;