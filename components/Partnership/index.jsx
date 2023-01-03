import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import React from "react";

const Partnership = () => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full h-auto pb-10 px-5 tablet:px-32 bg-primary space-y-6">
      <p className="text-secondary font-semibold primary-font font-outfit text-center">
        {t("partnership.title")}
      </p>
      <p className=" base-font text-white font-normal font-outfit text-center">
        {t("partnership.content")}
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
