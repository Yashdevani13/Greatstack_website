import React from 'react'
import './Footer.css'
import { Container } from '@mui/material'

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footer">
          <p>© 2024 Edusity. All rights reserved.</p>
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </Container>
    </>
  )
}

export default Footer
