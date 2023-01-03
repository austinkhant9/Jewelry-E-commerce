import React from "react";
import Image from "next/legacy/image";
import useTranslation from "next-translate/useTranslation";

export const Block = ({ path = "", label = "" }) => {
  return (
    <div className="col-span-1 space-y-3 group">
      <div className="flex justify-center  group-hover:rotate-[360deg] duration-300">
        <Image src={path} width={30} height={30} alt="map pin" />
      </div>
      <p className="base-font text-white text-opacity-40 group-hover:text-opacity-100 text-center">
        {label}
      </p>
    </div>
  );
};

const ChooseUs = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full h-auto py-10 px-5 tablet:px-32 bg-primary space-y-12">
      <p className="text-white font-semibold primary-font font-outfit text-center">
        {t("whyChooseUs.title")}
      </p>
      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-y-10">
        <Block
          path="/images/Icons/map-pin.svg"
          label={t("whyChooseUs.secureLocation")}
        />
        <Block
          path="/images/Icons/truck.svg"
          label={t("whyChooseUs.safeTransportation")}
        />
        <Block
          path="/images/Icons/thumbs-up.svg"
          label={t("whyChooseUs.quality")}
        />
        <Block
          path="/images/Icons/pin.svg"
          label={t("whyChooseUs.siteAreas")}
        />
      </div>
    </div>
  );
};

export default ChooseUs;
