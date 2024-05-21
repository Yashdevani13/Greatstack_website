import React from 'react'
import './Hero.css'
import { Container } from "@mui/material"
import dark_arrow from '../../img/dark-Arrow.png'


const Hero = () => {
  return (
    <>
      <div className="hero">
        <Container>
          <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
              and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" className='' /> </button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Hero
