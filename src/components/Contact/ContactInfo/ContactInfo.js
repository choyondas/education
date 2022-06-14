
import { NavLink } from 'react-router-dom';
import './ContactInfo.css';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

const ContactInfo = () => {
  
    
    return (
        <div className="container">
            <div className="office">
                <ul>
                <li className="headOffice"><a href="">Head Office</a></li>
                    <li className="usaOffice">
                    <NavLink to ="/usaoffice">USA Office</NavLink>
                    </li>
            </ul>
            </div>

            <div className="informationDesk">
                <div className="infoItem1">
                    <img src="http://www.istudentz.com/wp-content/uploads/2018/07/Contact-Us-340x340.jpg" alt="" />
                </div>
                <div className="infoItem1">
                    <img src="http://www.istudentz.com/wp-content/uploads/2018/07/Contact-Us-340x340.jpg" alt="" />
                </div>
                <div className="infoItem1 contactDet">
                    <h3>Contact Details</h3><br />
                    
                    <h4><span><MdLocationOn/></span> Flat No 207,Laxminivas Green Lands </h4>   
                    <h4> <span><BsTelephoneFill/></span> 9032088881</h4>
                    <a href="mailto:info@i-studentz.com"> <span><IoMdMail /></span> info@i-studentz.com</a>
                    

                    <div className="contactInfoIcon">
                            <div className="contactIcon">
                                <a href="https://www.facebook.com/" target="_blank"><FaFacebookF className="icons"/></a>
                            </div>
                            <div className="contactIcon">
                                <a href="http://www.twitter.com"target="_blank"><AiOutlineTwitter className="icons"/></a>
                            </div>
                          
                                
                            
                            <div className="contactIcon">
                                <a href="http://www.google.com" target="_blank"><AiOutlineGoogle className="icons"/></a>
                            </div>
                            <div className="contactIcon">
                                <a href="http://www.linkedin.com" target="_blank"><RiLinkedinFill className="icons"/></a>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;