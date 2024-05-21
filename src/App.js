import React from 'react'
import Navbar from './componet/NavBar/Navbar'
import '../src/App.css'
import Hero from './componet/Hero/Hero'
import Program from './componet/Program/Program'
import Title from './componet/Title/Title'
import About from './componet/About/About'
import Campus from './componet/campus/Campus'
import Testimonial from './componet/Testimonial/Testimonial'
import Contact from './componet/Contact/Contact'
import Footer from './componet/Footer/Footer'


// https://greatstack.in/

// form - Web3Forms website
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle='OUR PROGRAM' title='What We Offer' />
      <Program />
      <About />
      <Title subTitle='GALLERY' title='Campus Photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' title='What Student Says' />
      <Testimonial />
      <Title subTitle='CONTACT US' title='Get in Touch' />
      <Contact />
      <Footer />
    </>
  )
}

export default App
