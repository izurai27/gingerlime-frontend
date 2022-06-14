import About from "./components/About.component";
import ContactUs from "./components/ContactUs.component";
import FinishedProduct from "./components/FinishedProduct.component";
import GLintro from "./components/GLintro.component";
import Header from "./components/Header.component";
import InspiringUs from "./components/InspiringUs.component";
import Navbar from "./components/Navbar.component";
import Socmed from "./components/Socmed.component";
import WhatsNew from "./components/WhatsNew.component";


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <WhatsNew/>
      <GLintro/>
      <FinishedProduct/>
      <InspiringUs/>
      <About/>
      <ContactUs/>
      <Socmed/>
    </div>
  );
}

export default App;
