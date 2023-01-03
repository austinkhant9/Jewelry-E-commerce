import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const SecureLocation = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Pager
        PageNumber="03"
        TagLine="PROJECT STRENGTH"
        Title={t("secureLocation.title")}
        Content={t("secureLocation.content")}
        ImagePath="/images/Background/Map.svg"
      />
    </>
  );
};

export default SecureLocation;
