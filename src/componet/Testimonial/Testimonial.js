import { Container } from '@mui/material'
import './Testimonial.css'
import Next_icon from '../../img/Next_icon.png'
import Back_icon from '../../img/Back_icon.png'
import User_1 from '../../img/user_1.png'
import User_2 from '../../img/user_2.png'
import User_3 from '../../img/user_3.png'
import User_4 from '../../img/user_4.png'
import { useRef } from 'react'

const Testimonial = () => {

  const slider =useRef ();
  let tx =0;

  const slideForward = () =>{
    if(tx > -50){
      tx -=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`
  }
  const slideBackward = () =>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`
  }

  return (
    <>
      <Container>
        <div className="testimonial">
          <img src={Next_icon} alt="" className='next-btn'  onClick={slideForward}/>
          <img src={Back_icon} alt="" className='back-btn' onClick={slideBackward} />
          <div className="silder">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={User_1} alt="" />
                    <div className="">
                      <h3>Emily Williams</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions
                    I've ever made. The supportive community, state-of-the-art facilities, and
                    commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={User_2} alt="" />
                    <div className="">
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions
                    I've ever made. The supportive community, state-of-the-art facilities, and
                    commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={User_3} alt="" />
                    <div className="">
                      <h3>Emily Williams</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions
                    I've ever made. The supportive community, state-of-the-art facilities, and
                    commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={User_4} alt="" />
                    <div className="">
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions
                    I've ever made. The supportive community, state-of-the-art facilities, and
                    commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Testimonial
