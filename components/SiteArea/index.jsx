import useTranslation from "next-translate/useTranslation";
import React from "react";
import PagerRight from "../Components/PagerRight";

const SiteArea = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <PagerRight
        PageNumber="05"
        TagLine="PROJECT STRENGTH"
        Title={t("varietySiteAreas.title")}
        Content={t("varietySiteAreas.content")}
        ImagePath="/images/Background/variety-site.png"
      />
    </>
  );
};

export default SiteArea;
