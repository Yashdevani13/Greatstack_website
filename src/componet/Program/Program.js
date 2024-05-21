import React from 'react'
import './Program.css'
import Program_1 from '../../img/program_1.png'
import Program_2 from '../../img/Program_2.png'
import Program_3 from '../../img/Program_3.png'
import Program_icon_1 from '../../img/program_icon_1.png'
import Program_icon_2 from '../../img/program_icon_2.png'
import Program_icon_3 from '../../img/program_icon_3.png'
import { Container } from '@mui/material'

const Program = () => {
    return (
        <>
            <Container>
                <div className="programs" >
                    <div className="program">
                        <img src={Program_1} alt="" />
                        <div className="caption">
                            <img src={Program_icon_1} alt="" />
                            <p>Graduation Degree</p>
                        </div>
                    </div>
                    <div className="program">
                        <img src={Program_2} alt="" />
                        <div className="caption">
                            <img src={Program_icon_2} alt="" />
                            <p>Masters Degree</p>
                        </div>
                    </div>
                    <div className="program">
                        <img src={Program_3} alt="" />
                        <div className="caption">
                            <img src={Program_icon_3} alt="" />
                            <p>Post Graduation</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Program
