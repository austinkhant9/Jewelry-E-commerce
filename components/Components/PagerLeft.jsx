import React from "react";
import Image from "next/legacy/image";

const Pager = ({
  PageNumber = "",
  TagLine = "",
  Title = "",
  Content = "",
  ImagePath = "",
}) => {
  return (
    <div className="grid grid-cols-7 gap-y-8 laptop:gap-y-0 tablet:gap-x-6 py-10 px-5 tablet:px-20 bg-primary">
      <div className="col-span-7 tablet:col-span-4 relative">
        <p className="text-9xl font-outfit font-extrabold text-white text-opacity-10">
          {PageNumber}
        </p>
        <div className="absolute top-[3rem] left-[3rem] flex flex-wrap items-center space-x-4 duration-300 overflow-x-hidden">
          <div className="w-20 h-px bg-secondary " />
          <p className="caption-font text-secondary font-outfit capitalize">
            {TagLine}
          </p>
        </div>
        <div className="space-y-8">
          <p className="heading-font text-white font-roboto font-semibold -mt-[2.7rem] ml-[8rem]">
            {Title}
          </p>
          <p className="base-font font-outfit text-white text-opacity-70 font-normal text-justify laptop:ml-[6rem]">
            {Content}
          </p>
        </div>
      </div>
      <div className="col-span-7 tablet:col-span-3">
        <Image
          src={ImagePath}
          layout="responsive"
          width={0}
          height={0}
          objectFit="contain"
          alt="About"
        />
      </div>
    </div>
  );
};

export default Pager;
