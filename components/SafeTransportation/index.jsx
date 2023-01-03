import useTranslation from "next-translate/useTranslation";
import React from "react";
import PagerRight from "../Components/PagerRight";

const SafeTransportation = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <PagerRight
        PageNumber="04"
        TagLine="PROJECT STRENGTH"
        Title={t("safeTransportation.title")}
        Content={t("safeTransportation.content")}
        ImagePath="/images/Background/Truck.svg"
      />
    </>
  );
};

export default SafeTransportation;
