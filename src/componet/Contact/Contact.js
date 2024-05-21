import React from 'react'
import './Contact.css'
import Msg_icon from '../../img/msg_icon.png'
import Email_icon from '../../img/email-icon.png'
import Phone_icon from '../../img/phone-icon.png'
import Location_icon from '../../img/location-icon.png'
import White_arrow from '../../img/white_arrow.png'
import { Container } from '@mui/material'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4d78c6a2-98f2-455f-a027-3cff6ee25e1f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <Container>
                <div className="contact">
                    <div className="contact-col">
                        <h3>Send us a message <img src={Msg_icon} alt="" /></h3>
                        <p>Feel free to reach out through contact form or find our contact
                            information below. Your feedback, questions, and suggestions are
                            important to us as we strive to provide exceptional service to
                            our university community.
                        </p>
                        <ul>
                            <li> <img src={Email_icon} alt="" />Contact@GreatStack.dev</li>
                            <li> <img src={Phone_icon} alt="" />+1 123-456-7890</li>
                            <li> <img src={Location_icon} alt="" />77 Massachusetts Ave, Cambridge
                                <br />MA 02139, United States
                            </li>
                        </ul>
                    </div>
                    <div className="contact-col">
                        <form onSubmit={onSubmit}>
                            <label>Your Name</label>
                            <input type="text" name='name' placeholder='Enter Your Name' required />
                            <label>Phone Number</label>
                            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                            <label>Write your messages here</label>
                            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                            <button type="submit" className='btn dark-btn'>Submit Now <img src={White_arrow} alt="" /></button>
                        </form>
                        <span>{result}</span>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact
