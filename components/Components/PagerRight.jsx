import React from "react";
import Image from "next/legacy/image";

const PagerRight = ({
  PageNumber = "",
  TagLine = "",
  ImagePath = "",
  Title = "",
  Content = "",
}) => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row tablet:space-x-6 w-full h-auto py-10 px-5 laptop:px-20 bg-primary">
      <div className="w-full h-auto tablet:w-[40%] mt-10 tablet:mt-0">
        <Image
          src={ImagePath}
          layout="responsive"
          width={0}
          height={0}
          alt="About"
        />
      </div>
      <div className="w-full h-auto tablet:w-[60%] relative">
        <p className="text-9xl font-outfit font-extrabold text-white text-opacity-10 text-right tablet:text-left">
          {PageNumber}
        </p>
        <div className="absolute top-[3rem] left-[4rem] tablet:left-[3rem] flex flex-wrap flex-row-reverse tablet:flex-row items-center space-x-4 duration-300 overflow-x-hidden">
          <div className="w-20 h-px bg-secondary " />
          <p className="caption-font text-secondary font-outfit capitalize">
            {TagLine}
          </p>
        </div>
        <div className="space-y-6">
          <p className="heading-font text-white font-roboto font-semibold -mt-[2.7rem] ml-[5rem] tablet:ml-[8rem]">
            {Title}
          </p>
          <p className="base-font font-outfit text-white text-opacity-70 font-normal laptop:ml-[6rem]">
            {Content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagerRight;
