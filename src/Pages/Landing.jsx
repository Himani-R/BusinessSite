import Navbar from "../Components/Global/Navbar";
import Hero from "../Components/Landing/Hero";
import Services from "../Components/Landing/Services";
import Industries from "../Components/Landing/Industries";
import Products from "../Components/Landing/Products";
import Plans from "../Components/Landing/Plans";
import News from "../Components/Landing/News";
import Contact from "../Components/Global/Contact";
import Footer from "../Components/Global/footer";
export function Land(){
    return (
        <>
          <Navbar/>
          <Hero/>
          <Services/>
          <Industries/>
          <Products/>
          <Plans/>
          <News/>
          <Contact/>
          <Footer/>

        </>
      
        
    )
}