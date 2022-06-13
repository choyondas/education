import React from 'react';
import './Footer.css';
import { BiMailSend } from 'react-icons/bi';
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
                            <li><a href="">Study In New Zealand</a></li>
                            <li><a href="">Study In UK</a></li>
                            
                          
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
                            
                            
                       </div>

                    </div>
                    <div className="footerCol">
                        <div className="footerInfo">
                            <h3>Facebook</h3>
                            <div className="contentFacebook">
                               <img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/282102281_4891013091015272_5085785821356209499_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sCaK4Tn0828AX9Zf1uP&_nc_oc=AQmnpErAzK99rb7uR5Zfq6FgTQMjVO5WjqmzDYUmvkx8qld7mIfLne5cJoOI4u1pyZuJ20THqeSQFl2WY2do1vHF&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-Q4eijAdTHm1oaR2d-3renm_gMnaFPgjZV1sRgQqQCjg&oe=62AC13DF" alt="" />
                                <div className='facecon'>
                                     <a className= 'logo' href="https://www.facebook.com/istudentz/" target="_blank">
                                    <img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t31.18172-8/10887545_661567517293205_1574229128948072886_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JWr-3wnkY6IAX8N2Gif&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-OWNTww-WskVX-pfQgUQb7G1IhCQ81-Tz7o_M8Xp5W1g&oe=62CD559F" alt="" />
                                    </a>
                                    
                                    <div className="faceLike">
                                        <a href="https://www.facebook.com/istudentz/" target="_blank"><h4>I StudentZ India</h4></a>
                                    <h5>47K likes</h5>
                                    </div>
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