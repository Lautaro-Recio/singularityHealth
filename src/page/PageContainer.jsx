import Footer from "./Footer";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Make from "./Make";
import Nav from "./Nav";
import Owners from "./Owners";
import Services from "./Services";

function PageContainer() {
  return (
    <div className="bg-[#f3f6fb] overflow-hidden">
      <Nav />
      <Home />
      <Services />
      <Owners />
      <HowItWorks />
      <Make/>
      <Footer/>
    </div>
  );
}

export default PageContainer;
