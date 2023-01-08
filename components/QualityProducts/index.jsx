import useTranslation from "next-translate/useTranslation";
import React from "react";
import PagerRight from "../Components/PagerRight";

const QualityProducts = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <PagerRight
        PageNumber="06"
        TagLine="PROJECT STRENGTH"
        Title={t("goodQualityProduct.title")}
        Content={t("goodQualityProduct.content")}
        ImagePath="/images/Background/QualityProduct.svg"
      />
    </>
  );
};

export default QualityProducts;
