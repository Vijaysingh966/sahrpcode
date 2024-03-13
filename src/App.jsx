import "./app.scss";
import Contect from "./components/contect/Contect";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  
  return   <div className="main"> 
  <Cursor/>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/>   </section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/> 
   
    <section id="Contect">  
    <Contect/>
    </section>
  </div>;
};

export default App;
