import Branches from "./components/Branches"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Sale from "./components/Sale"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import About from "./components/about"
import What from "./components/whatDoWeDo"


function App() {


  return (
    <>
    <header className="">
      <Nav/>
      <Hero/>
      
      
    </header>
   
      <div>
       <What/>
       <Sale/>
       <Services/>
       <Testimonial/>
       <Branches/>
       <About/>
        
        <h1 className='text-3xl font-bold underline text-green-200'>Hello world</h1>
      </div>
    </>
  )
}

export default App
