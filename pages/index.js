import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

// components
import Banner from "../components/Banner";
import About from "../components/AboutUs";
import SecureLocation from "../components/SecureLocation";
import QualityProducts from "../components/QualityProducts";
import SecondPhaseProject from "../components/SecondPhaseProject";
import NationalLevelProject from "../components/NationalLevelProject";
import SafeTransportation from "../components/SafeTransportation";
import SiteArea from "../components/SiteArea";
import InvestmentInvitation from "../components/InvestmentInvitation";
import ChooseUs from "../components/WhyChooseUse";
import Partnership from "../components/Partnership";
import ZoneBuilding from "../components/ZoneBuilding";
import Footer from "../components/Footer";

export default function Home() {
  // const { t } = useTranslation("common");
  return (
    <>
      <Banner />
      {/* <div className="desktop:container desktop:mx-auto"> */}
      <About />
      <NationalLevelProject />
      <ChooseUs />
      <SecureLocation />
      <SafeTransportation />
      <QualityProducts />
      <SiteArea />
      <ZoneBuilding />
      <SecondPhaseProject />
      <InvestmentInvitation />
      <Partnership />
      {/* </div> */}
      <Footer />
    </>
  );
}
