import Head from "next/head";
import BeChange from "../components/BeChange";
import Community from "../components/Community";
import CommunityTwo from "../components/CommunityTwo";
import Connect from "../components/Connect";
import CoreDao from "../components/CoreDao";
import Details from "../components/Details";
import DigitalEconomy from "../components/DigitalEconomy";
import DigitalIdentity from "../components/DigitalIdentity";
import DigitalIdentityTwo from "../components/DigitalIdentityTwo";
import BottomFooter from "../components/Footers/BottomFooter";
import BottomFooterTwo from "../components/Footers/BottomFooterTwo";
import Footer from "../components/Footers/Footer";
import FoundingMembers from "../components/FoundingMembers";
import IdenterProtocol from "../components/IdenterProtocol";
import IdenterTechnology from "../components/IdenterTechnology";
import IdenterValues from "../components/IdenterValues";
import InternetIdeas from "../components/InternetIdeas";
import Intro from "../components/Intro";
import IntroTwo from "../components/IntroTwo";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import Navbar from "../components/Navbars/Navbar";
import PartOfSolution from "../components/PartOfSolution";
import RoadMap from "../components/RoadMap";
import Service from "../components/Service";
import Tokenomics from "../components/Tokenomics";

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
        className="overflow-hidden bg-blue-900"
        // className="overflow-hidden "
      >
        <Head>
          <title>IDENTER</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* <video id="background-video" autoPlay loop muted>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
        </video> */}

        <Navbar />
        <MobileNavbar />
        {/* <Intro /> */}
        <IntroTwo />
        {/* <Details /> */}
        <IdenterValues />
        <Service />
        {/* <DigitalIdentity /> */}
        <DigitalIdentityTwo />
        <InternetIdeas />
        <DigitalEconomy />
        {/* <IdenterProtocol /> */}
        <IdenterTechnology />
        <PartOfSolution />
        <Tokenomics />
        {/* <CoreDao /> */}
        <RoadMap />
        <FoundingMembers />
        {/* <Community /> */}
        <BeChange/>
        <CommunityTwo />
        {/* <Connect /> */}
        {/* <Footer /> */}
        {/* <BottomFooter /> */}
        <BottomFooterTwo />
      </div>
    </>
  );
}
