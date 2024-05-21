import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import { Container } from "@mui/material"
import { Link } from 'react-scroll'
const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            window.scrollY > 80 ? setSticky (true) : setSticky(false);
        })
    },[])

    return (
        <>
            <nav className={` ${sticky ? 'dark-nav' : ''}`}>
                <Container>
                    <div className="main-top">
                        <div className="img">
                            <img src={logo} alt="" className='logo' />
                        </div>

                        <div className="menu">
                            <ul>
                                <li><a href="#"> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></a></li>
                                <li><a href="#"><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></a></li>
                                <li><a href="#"><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></a> </li>
                                <li><a href="#"><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></a></li>
                                <li><a href="#"><Link to='testimonial' smooth={true} offset={-260} duration={500} >Testimonials</Link></a></li>
                                <li><a href="#"><Link className='btn' to='contact' smooth={true} offset={-260} duration={500} >Contact Us</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar
