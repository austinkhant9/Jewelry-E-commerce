import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const SecondPhaseProject = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Pager
        PageNumber="07"
        TagLine="FUTURE PLAN"
        Title={t("secondPhaseProject.title")}
        Content={t("secondPhaseProject.content")}
        ImagePath="/images/Background/second-phase-project.jpg"
      />
    </>
  );
};

export default SecondPhaseProject;
