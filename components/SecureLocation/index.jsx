// import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const SecureLocation = () => {
  // const { t } = useTranslation('common');
  return (
    <>
      <Pager
        PageNumber="03"
        TagLine="PROJECT STRENGTH"
        Title="လုံခြုံစိတ်ချသည့် တည်နေရာ"
        Content="နေပြည်တော်သည် ကျောက်မျက်ရတနာ လုပ်ငန်းရှင်များ၊ ကုန်သည်များနှင့် ပြည်သူလူထုများအတွက် ရင်းနှီးမြှုပ်နှံမှု ဖော်ဆောင်ရာတွင် လုံခြုံစိတ်ချရဆုံးနေရာ ဖြစ်ပါသည်။နေပြည်တော်သည် မြန်မာနိုင်ငံ၏ အုပ်ချုပ်ရေးမြို့တော်ဖြစ်သောကြောင့် လုံခြုံစိတ်ချပြီး တရားဥပဒေစိုးမိုးမှုလည်း ခိုင်ခိုင်မာမာရှိပါသည်။ နေပြည်တော်ရှိ Myanmar Jewellery E-Commerce Zone နှင့် သက်ဆိုင်ရာ ဝန်ထမ်းများအတွက် အကောင်းဆုံး လုံခြုံရေးနှင့် ဝန်ဆောင်မှု ကို ထောက်ပံ့ပေး နိုင်ပါသည်။"
        ImagePath="/images/Background/Map.svg"
      />
    </>
  );
};

export default SecureLocation;
