// import useTranslation from "next-translate/useTranslation";
import React from "react";
import Pager from "../Components/PagerLeft";

const About = () => {
  // const { t } = useTranslation("common");
  return (
    <div id="About">
      <Pager
        PageNumber="01"
        TagLine="About Started"
        Title="Zone အကြောင်းအသေးစိတ်"
        Content="Myanmar Jewellery E-Commerce Zone သည် နိုင်ငံတော်မှ ကြီးမှူးကျင်းပသည့် မြန်မာ့ကျောက်မျက်ရတနာ ပြပွဲမှလွဲ၍ ကျောက်မျက်ရတနာအရိုင်း၊ အချောထည်၊ လက်ဝတ်ရတနာများ ရောင်းဝယ်ခြင်းလုပ်ငန်းနှင့် တိုက်ရိုက်ထုတ်လွှင့် ရောင်းချခြင်း လုပ်ငန်းကို တရားဝင်ခွင့်ပြုထားသည့် တစ်ခုတည်းသော ကုမ္ပဏီဖြစ်ပါသည်။ နိုင်ငံတော်သို့ အခွန်ပေးဆောင်ပြီးပါက မြန်မာနိုင်ငံမှ ပြည်ပနိုင်ငံများသို့ ကျောက်မျက် ရတနာအရိုင်း၊ အချောထည်၊ လက်ဝတ်ရတနာများကို လုံခြုံစိတ်ချစွာဖြင့် တရားဝင်တင်ပို့နိုင်မည်ဖြစ်ကြောင်း အာမခံနိုင်ပါသည်။ Myanmar Jewellery E-Commerce Zone သည် တရားဝင်ဖြစ်မှု၊ စံချိန်စံညွှန်းပြည့်မှီမှု၊ အနာဂတ်မူဝါဒများ နှင့် ကျောက်မျက်ရတနာများဆိုင်ရာ ပံ့ပိုးကူညီမှုစသည်ဖြင့် အားသာချက်များစွာ ရှိပါသည်။"
        ImagePath="/images/Background/about-us.jpg"
      />
    </div>
  );
};

export default About;
