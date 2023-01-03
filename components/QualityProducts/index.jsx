import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const QualityProducts = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Pager
        PageNumber="05"
        TagLine="PROJECT STRENGTH"
        Title={t("goodQualityProduct.title")}
        Content={t("goodQualityProduct.content")}
        ImagePath="/images/Background/QualityProduct.svg"
      />
    </>
  );
};

export default QualityProducts;
