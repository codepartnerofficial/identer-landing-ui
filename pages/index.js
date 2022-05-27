import Details from "../components/Details";
import DigitalEconomy from "../components/DigitalEconomy";
import DigitalIdentity from "../components/DigitalIdentity";
import Footer from "../components/Footers/Footer";
import Intro from "../components/Intro";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import Navbar from "../components/Navbars/Navbar";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + `/images/langingPageBg.png` + ")",
          backgroundPosition: "left top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Navbar />
        <MobileNavbar />
        <Intro />
        <Details />
        <Service />
        <DigitalIdentity />
        <DigitalEconomy />
        <Footer />
      </div>
    </>
  );
}
