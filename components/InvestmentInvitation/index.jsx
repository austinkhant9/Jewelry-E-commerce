import useTranslation from "next-translate/useTranslation";
import React from "react";
import PagerRight from "../Components/PagerRight";

const InvestmentInvitation = () => {
  const { t } = useTranslation("common");
  return (
    <div id="Investment">
      <PagerRight
        PageNumber="08"
        TagLine="INVITATION"
        Title={t("investmentInvitation.title")}
        Content={t("investmentInvitation.content")}
        ImagePath="/images/Background/GoldCoin.svg"
      />
    </div>
  );
};

export default InvestmentInvitation;
