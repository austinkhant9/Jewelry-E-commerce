import Image from "next/legacy/image";
import React from "react";
import { Link } from "react-scroll/modules";

// components
import NavigationBar from "../NavigationBar";

const Banner = () => {
  return (
    <div id="Home" className="relative w-full h-screen">
      <Image
        src="/images/Background/Banner Background.svg"
        layout="fill"
        objectFit="cover"
        width={0}
        height={0}
        sizes="100vw"
        alt="Banner"
        priority={true}
      />
      <div className="w-full h-auto absolute top-0 left-0">
        <NavigationBar />
      </div>
      <div className="w-full h-auto absolute top-[25vh] laptop:top-[10rem] left-0">
        <div className="space-y-2 ml-[4rem] laptop:ml-[22rem]">
          <div className="flex items-center w-full tablet:w-[40%] laptop:w-[60%] h-auto space-x-4">
            <div className="w-[30%] h-px bg-secondary" />
            <p className="font-outfit base-font text-secondary font-medium">
              LEGAL & QUALITY
            </p>
          </div>
          <p className="font-roboto text-white sub-heading-font font-semibold">
            Myanmar First <br /> Jewellery E-commerce Zone
          </p>
        </div>
        <div className="flex justify-end w-full h-auto tablet:-mt-14 laptop:-mt-20">
          <Image
            src="/images/Icons/Path.svg"
            alt="Path"
            width={"330rem"}
            height={"330rem"}
          />
        </div>
      </div>
      <div className="w-full h-auto absolute bottom-3 left-0 laptop:hover:cursor-pointer">
        <div className="flex justify-center animate-bounce">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Image
              src="/images/Icons/chevrons-down.svg"
              width={35}
              height={35}
              alt="Down Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
