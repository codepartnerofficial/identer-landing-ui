import Community from "../components/Community";
import Connect from "../components/Connect";
import CoreDao from "../components/CoreDao";
import Details from "../components/Details";
import DigitalEconomy from "../components/DigitalEconomy";
import DigitalIdentity from "../components/DigitalIdentity";
import BottomFooter from "../components/Footers/BottomFooter";
import Footer from "../components/Footers/Footer";
import IdenterProtocol from "../components/IdenterProtocol";
import InternetIdeas from "../components/InternetIdeas";
import Intro from "../components/Intro";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import Navbar from "../components/Navbars/Navbar";
import PartOfSolution from "../components/PartOfSolution";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <div
        // style={{
        //   // backgroundImage: "url(" + `/images/langingPageBg.png` + ")",
        //   backgroundImage: "url(" + `/images/identerbg3.webp` + ")",
        //   // backgroundImage: "url(" + `/images/identerbg2.gif` + ")",
        //   backgroundPosition: "left top",
        //   backgroundSize: "100%",
        //   // backgroundRepeat: "no-repeat",
        //   height: "100%",
        // }}
        className="overflow-hidden "
      >
        <video id="background-video" autoPlay loop muted>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
        </video>

        <Navbar />
        <MobileNavbar />
        <Intro />
        <Details />
        <Service />
        <DigitalIdentity />
        <InternetIdeas />
        <DigitalEconomy />
        <IdenterProtocol />
        <PartOfSolution />
        <CoreDao />
        <Community />
        <Connect />
        <Footer />
        <BottomFooter />
      </div>
    </>
  );
}
