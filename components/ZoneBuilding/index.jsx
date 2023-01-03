import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import React from "react";

export const Card = ({ imagePath = "", title = "", label = "" }) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Image
          src={imagePath}
          layout="responsive"
          objectFit="cover"
          width={0}
          height={0}
          sizes="100%"
          className="opacity-40 laptop:hover:opacity-100 laptop:hover:scale-105 duration-300"
          alt="building"
        />
        <p className="absolute bottom-2 left-3 text-secondary primary-font font-medium laptop:group-hover:translate-y-5 duration-300">
          {title}
        </p>
      </div>
      <div className="px-1">
        <p className="base-font text-white font-normal font-outfit text-justify">
          {label}
        </p>
      </div>
    </div>
  );
};

const ZoneBuilding = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full h-auto py-10 px-5 tablet:px-32 bg-primary space-y-6">
      <p className="text-secondary font-semibold primary-font font-outfit text-center">
        {t("zoneBuilding.title")}
      </p>
      <p className="base-font text-white font-normal font-outfit text-center">
        {t("zoneBuilding.content")}
      </p>
      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-y-10 gap-x-3">
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/online-live-room.jpg"}
            title={t("zoneBuilding.onlineLiveRoom.title")}
            label={t("zoneBuilding.onlineLiveRoom.content")}
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/jewelry-market-place.jpg"}
            title={t("zoneBuilding.jewelryMarketPlace.title")}
            label={t("zoneBuilding.jewelryMarketPlace.content")}
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/jewelry-showroom.jpg"}
            title={t("zoneBuilding.jewelryShowroom.title")}
            label={t("zoneBuilding.jewelryShowroom.content")}
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/jewelry-store-place.jpg"}
            title={t("zoneBuilding.jewelryStorePlace.title")}
            label={t("zoneBuilding.jewelryStorePlace.content")}
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/transportation-center.jpg"}
            title={t("zoneBuilding.transportationCenter.title")}
            label={t("zoneBuilding.transportationCenter.content")}
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/other-related-places.jpg"}
            title={t("zoneBuilding.otherRelatedPlaces.title")}
            label={t("zoneBuilding.otherRelatedPlaces.content")}
          />
        </div>
      </div>
    </div>
  );
};

export default ZoneBuilding;