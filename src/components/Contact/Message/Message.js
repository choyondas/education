import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Message.css';

import leader1 from '../../../images/leader/leader1.png';
import leader2 from '../../../images/leader/leader2.jpg';
const Message = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_by05nmo', 'template_o5rqp1s', form.current, 'user_RuWm0sqkqeCIfMyzyf4yw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




    return (
        <div>
            <div className="feedback">
                <div className="formdiv">
                    <h3>Feedback form</h3>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your First Name *" required/>
                    <input type="email" placeholder="Your E-mail *" required/>
                    <input type="number" placeholder="Your Phone *" required />
                    <textarea name="message" placeholder="Your Message" required rows="7"></textarea>
                    <input type="submit" value="Send" />


                </form> 
                </div>
                <div className="yourContact">
                    <h3>Your Contact</h3>
                    <div className="leader">
                        <img src={leader1} alt="" />
                        <div className="txtleader">
                            <h4>Mr. Mohd Yousufuddin</h4>
                            <p>Chairman & Managing Director</p>
                            <span>Email: <a href="mailto:director@i-studentz.com">director@i-studentz.com</a></span>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="leader">
                        <img src={leader2} alt="" />
                        <div className="txtleader">
                            <h4>Mr. Mohd Yousufuddin</h4>
                            <p>Manager</p>
                            <span>Email: <a href="mailto:manager@i-studentz.com">manager@i-studentz.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Message;