// import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import React from "react";

export const Card = ({ imagePath = "", title = "", label = "" }) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Image
          src={imagePath}
          layout="responsive"
          objectFit="cover"
          width={0}
          height={0}
          sizes="100%"
          className="opacity-80 laptop:opacity-40 laptop:hover:opacity-100 laptop:hover:scale-105 duration-300"
          alt="building"
        />
        <p className="absolute bottom-2 left-3 text-secondary base-font font-medium laptop:group-hover:translate-y-5 duration-300">
          {title}
        </p>
      </div>
      <div className="px-1">
        <p className="base-font text-white font-normal font-outfit">{label}</p>
      </div>
    </div>
  );
};

const ZoneBuilding = () => {
  // const { t } = useTranslation("common");
  return (
    <div className="w-full h-auto py-10 px-5 tablet:px-14 laptop:px-32 bg-primary space-y-6">
      <p className="text-secondary font-semibold primary-font font-outfit text-center">
        {/* {t("zoneBuilding.title")} */}
        စီမံကိန်းတွင်ပါဝင်သော အဆောက်အဦးများ
      </p>
      <p className="base-font text-white font-normal font-outfit text-center">
        {/* {t("zoneBuilding.content")} */}
        (၄၃၀၀၀)စတုရန်းပေခန့်ရှိပြီး showroom ၊ meeting room ၊ ရုံးခန်းများ ကျောက်မျက် ကုန်သည်ခန်းများပါဝင်သည်။
      </p>
      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-y-10 gap-x-3">
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/online-live-room.jpg"}
            title="Online Live လွှင့်ခန်း"
            label="သတ်မှတ်ထားသောဧရိယာသည် (၅၈၀၀၀) စတုရန်းပေခန့်ရှိပြီး ထို Live လွှင့်ခန်းတွင် လူဦး‌‌ရေ (၁၀၀)နီးပါး တက်ရောက်နိုင်ပါသည်။"
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/jewellery-market-place.jpg"}
            title="ကျောက်ဝိုင်း"
            label="သတ်မှတ်ထားသောဧရိယာသည် (၅၉၀၀၀) စတုရန်းပေခန့်ရှိပြီး ဆိုင်ခန်း (၇၀၀)ခန့် ထားရှိပြီး လူဦးရေ (၁၄၀၀)ဆံ့သော ကျောက်စိမ်းစျေးကွက်တစ်ခု"
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/jewellery-showroom.jpg"}
            title="ကျောက်မျက်ပြပွဲ"
            label="သတ်မှတ်ထားသောဧရိယာသည် (၇၀၀၀၀) စတုရန်းပေခန့်နေပြည်တော်ကျောက်မျက် ပြပွဲမှ စံသတ်မှတ်ခြင်း၊ ဥပဒေအရ အခွန်ဆောင်ခြင်း၊ တရားဝင်ပြည်ပနိုင်ငံသို့ တင်ပို့နိုင်ခြင်း"
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/jewellery-store-place.jpg"}
            title="ကျောက်မျက်သိုလှောင်ရုံ"
            label="ကျောက်မျက်တူးဖော်ရေး ကုမ္ပဏီများမှ ထွက်ရှိလာသော ကျောက်အရိုင်းတုံးများကို ယုံကြည်စိတ်ချစွာ လာရောက်သိုလှောင်နိုင်ပါသည်။"
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/transportation-center.jpg"}
            title="ပို့ဆောင်ရေးစင်တာ"
            label="လေကြောင်းပို့ဆောင်ရေး၊ ကုန်းလမ်းပို့ဆောင်ရေး၊ တရားဝင်ပို့ဆောင်ခြင်း၊ လျင်မြန်ခြင်း၊ အန္တရာယ်ကင်းခြင်း"
          />
        </div>
        <div className="col-span-1">
          <Card
            imagePath={"/images/Background/other-related-places.jpg"}
            title="ကျောက်မျက်နှင့် ဆက်စပ်သောဆိုင်ခန်းများ"
            label="သတ်မှတ်ထားသော ဧရိယာသည် (၁၁၈၀၀၀) စတုရန်းပေခန့်ဖြစ်ပြီးပွဲစားတန်း၊ ဆိုင်ခန်း၊ ကုန်တိုက်၊ စားသောက်ဆိုင်များ ပါဝင်ပါသည်။"
          />
        </div>
      </div>
    </div>
  );
};

export default ZoneBuilding;
