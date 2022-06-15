import About from "./components/About.component";
import ContactUs from "./components/ContactUs.component";
import FinishedProduct from "./components/FinishedProduct.component";
import GLintro from "./components/GLintro.component";
import Header from "./components/Header.component";
import InspiringUs from "./components/InspiringUs.component";
import Navbar from "./components/Navbar.component";
import Socmed from "./components/Socmed.component";
import WhatsNew from "./components/WhatsNew.component";
import Gap from "./StyledComponents/Gap";

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>

      <WhatsNew/>
      <Gap height="4rem"/>
      <GLintro/>
      <Gap height="4rem"/>
      <FinishedProduct/>
      <Gap height="4rem"/>
      <InspiringUs/>
      <Gap height="4rem"/>
      <About/>
      <Gap height="4rem"/>
      <ContactUs/>
      <Gap height="4rem"/>
      <Socmed/>
    </div>
  );
}

export default App;
