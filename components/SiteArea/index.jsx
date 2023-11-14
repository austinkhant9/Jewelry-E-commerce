// import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const SiteArea = () => {
  // const { t } = useTranslation("common");

  return (
    <>
      <Pager
        PageNumber="05"
        TagLine="PROJECT STRENGTH"
        Title="ကျောက်တူးဖော်နိုင်သော ဧရိယာ"
        Content="Myanmar Jewellery E-Commerce Zone နှင့် ပူးပေါင်းပါဝင်သော ကုမ္မဏီမျာစ် ကျောက်စိမ်းတူးဖော်သော ဧရိယာအများအပြား ပိုင်ဆိုင်သောကြောင့် အရည်အသွေးကောင်းမွန်သော ကျောက်စိမ်းအမျိုးအစား လည်း စုံလင်စွာရရှိနိုင်ပြီး ကျောက်များ၏ အရည်းအသွေးကိုလည်း အာမခံချက်ပေးနိုင်ပါသည်။"
        ImagePath="/images/Background/variety-site.png"
      />
    </>
  );
};

export default SiteArea;
