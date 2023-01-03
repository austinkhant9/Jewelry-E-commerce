import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Pager
        PageNumber="01"
        TagLine="About Started"
        Title={t("aboutUs.title")}
        Content={t("aboutUs.content")}
        ImagePath="/images/Background/about-us.jpg"
      />
    </>
  );
};

export default About;
