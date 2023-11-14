// import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import React from "react";

const Partnership = () => {
  // const { t } = useTranslation("common");

  return (
    <div
      id="Partnership"
      className="w-full h-auto py-10 px-5 tablet:px-32 bg-primary space-y-6"
    >
      <p className="text-secondary font-semibold primary-font font-outfit text-center">
        {/* {t("partnership.title")} */}
        မိတ်ဖက်ကုမ္ပဏီများ
      </p>
      <p className=" base-font text-white font-normal font-outfit text-center">
        {/* {t("partnership.content")} */}
        တရုတ်ပြည်သူ့သမ္မတနိုင်ငံတော်ရှိ MINGALAR ကျောက်မျက်ရတနာ
        ရောင်းဝယ်ရေးကုမ္မဏီသည် Myanamr Jewellery E-Commerce Zone ၏
        မဟာမိတ်ဖက်ကုမ္ပဏီဖြစ်ပါသည်။ MINGALAR
        ကျောက်မျက်ရတနာရောင်းဝယ်ရေးကုမ္ပဏီသည် တရုတ်နိုင်ငံတွင်း ယူနန်ပြည်နယ်ရှိ
        ရွှေလီမြို့၊ ကွမ်းတုံးပြည်နယ်ရှိ ping zhou မြို့နှင့် jieyang
        မြို့တို့တွင် ကျောက်မျက်ရတနာ ရောင်းဝယ်ရေးလုပ်ငန်းနှင့်
        ကျောက်မျက်ပြပွဲများ ကျင်းပပြုလုပ်ပေးသော ဝန်ဆောင်မှု
        ကုမ္ပဏီတစ်ခုဖြစ်ပါသည်။
      </p>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Image
            src="/images/Background/Dummy.svg"
            layout="responsive"
            width={0}
            height={0}
            alt="About"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/Background/Dummy.svg"
            layout="responsive"
            width={0}
            height={0}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
