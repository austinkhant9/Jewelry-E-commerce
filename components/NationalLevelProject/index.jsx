import useTranslation from "next-translate/useTranslation";
import React from "react";
import PagerRight from "../Components/PagerRight";

const NationalLevelProject = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <PagerRight
        PageNumber="02"
        TagLine="PROJECT LEVEL"
        Title={t('nationalLevel.title')}
        Content={t('nationalLevel.content')}
        ImagePath="/images/Background/national-level-project.jpg"
      />
    </>
  );
};

export default NationalLevelProject;
