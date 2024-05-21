import React from 'react'
import './Campus.css'
import Gallery_1 from '../../img/gallery_1.png'
import Gallery_2 from '../../img/gallery_2.png'
import Gallery_3 from '../../img/gallery_3.png'
import Gallery_4 from '../../img/gallery_4.png'
import White_arrow from '../../img/white_arrow.png'
import { Container } from '@mui/material'
const Campus = () => {
    return (
        <>
            <Container>
                <div className="campus">
                    <div className="gallery">
                        <img src={Gallery_1} alt="" />
                        <img src={Gallery_2} alt="" />
                        <img src={Gallery_3} alt="" />
                        <img src={Gallery_4} alt="" />
                    </div>
                    <button className='btn dark-btn'>See more here <img src={White_arrow} alt="" /></button>
                </div>
            </Container>
        </>
    )
}

export default Campus
