import Branches from "./components/Branches"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Sale from "./components/Sale"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import About from "./components/About"
import WhatDoWeDo from "./components/WhatDoWeDo"
import WhyChooseUs from "./components/WhyChooseUs"
import Partner from "./components/Partner"
import Footer from "./components/Footer"


function App() {


  return (
    <>
    <header className="">
      <Nav/>
      <Hero/>
      
      
    </header>
   
      <div>
       <WhatDoWeDo/>
       <Sale/>
       <Services/>
       <WhyChooseUs/>
       <Testimonial/>
       <Branches/>
       <About/>
       <Partner/>
        <Footer/>
      
      </div>
    </>
  )
}

export default App
