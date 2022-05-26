import Footer from "../components/Footers/Footer";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import Navbar from "../components/Navbars/Navbar";

export default function Home() {
  return (
    <>
    <div  style={{
          backgroundImage: "url(" + `/images/langingPageBg.png` + ")",
          backgroundPosition: "left top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }} >  

    <Navbar />
    <MobileNavbar />
    <Footer/>
    </div>
    
    </>
  )
}
