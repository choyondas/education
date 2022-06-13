import React from 'react';
import './Footer.css';
import { BiMailSend } from 'react-icons/bi';
import { AiFillFacebook} from 'react-icons/ai';

import facebook from '../../images/facebook.jpg';

const Footer = () => {
    return (
        <div className="footerDiv">
            <div className="container">
                
                
                <div className="footerRow">
                    <div className="footerCol">
                        <div className="footerInfo">
                             <h3>Study Abroad</h3>
                        <ul>
                            <li><a href="">Study In USA</a></li>
                            <li><a href="">Study In Canada</a></li>
                            <li><a href="">Study In Australia</a></li>
                            <li><a href="">Study In Ireland</a></li>
                            <li><a href="">Study In Germany</a></li>
                            <li><a href="">Study In France</a></li>
                            <li><a href="">Study In UK</a></li>
                            <li><a href="">Study In New Zealand</a></li>
                            
                          
                        </ul>
                       </div>

                    </div>
                    <div className="footerCol">
                        <div className="footerInfo">
                             <h3>Imp Information</h3>
                        <ul>
                            <li><a href="">Study In USA</a></li>
                            <li><a href="">Study In Canada</a></li>
                            <li><a href="">Study In Australia</a></li>
                            <li><a href="">Study In Ireland</a></li>
                            <li><a href="">Study In Germany</a></li>
                            <li><a href="">Study In France</a></li>
                          
                        </ul>
                       </div>

                    </div>
                    <div className="footerCol">
                        <div className="footerInfo">
                             <h3>Newsletter</h3>
                            <form action="">
                                 <input type="email" placeholder="Enter Your Email" required />
                            <span onClick='submit'> <BiMailSend/></span>
                            </form>
                            <p>By entering my email address and clicking "Sign Up" I agree to be contacted by EducationDynamics for additional education products and services, this submission is not required to use our site.</p>
                            
                            
                       </div>

                    </div>
                    <div className="footerCol">
                        <div className="footerInfo">
                            <h3>Facebook</h3>
                            <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.7)), url(${facebook})`, width:"100%",backgroundSize:'cover',}} className="contentFacebook">
                                <div  className="facebookItem">
                                    <a href=""><img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t31.18172-8/10887545_661567517293205_1574229128948072886_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JWr-3wnkY6IAX8N2Gif&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-OWNTww-WskVX-pfQgUQb7G1IhCQ81-Tz7o_M8Xp5W1g&oe=62CD559F" alt="" /></a>
                                <div>
                                    <a href=""><h4>I Studentz India</h4></a>
                                    <p>47K Likes</p>
                                    </div>
                                    
                                  
                                </div>
                                <div className="likePage">
                                    <a href="">
                                        <p> <AiFillFacebook/> Like Page</p>
                                    </a>
                             </div>

                            </div>
                           
                            
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;