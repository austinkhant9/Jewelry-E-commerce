// import useTranslation from "next-translate/useTranslation";
import React from "react";
import PagerRight from "../Components/PagerRight";

const QualityProducts = () => {
  // const { t } = useTranslation("common");

  return (
    <>
      <PagerRight
        PageNumber="06"
        TagLine="PROJECT STRENGTH"
        Title="ပစ္စည်း အရည်အသွေး အာမခံချက်"
        Content="Myanmar Jewellery E-Commerce Zone သည် မြန်မာ့ကျောက်စိမ်းတူးဖော်ရေး ကုမ္ပဏီအများအပြားနှင့် ရင်းနှီးပွင့်လင်းစွာ ပူးပေါင်းဆောင်ရွက်လျက်ရှိပါသည်။ ပူးပေါင်းသော ကုမ္ပဏီများသည် ခိုင်မာသောပစ္စည်း ထောက်ပံ့‌ရေးအတွက် အာမခံ အထောက်အပံ့များ ရရှိနိုင်ပါသည်။"
        ImagePath="/images/Background/QualityProduct.svg"
      />
    </>
  );
};

export default QualityProducts;
