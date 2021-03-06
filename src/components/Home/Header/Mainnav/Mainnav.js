import React from 'react';
import './Mainnav.css'
import { FaHome } from 'react-icons/fa';
import { BiUserPin } from 'react-icons/bi';
import {AiFillFolderOpen } from 'react-icons/ai';
import {FaGlobeAfrica } from 'react-icons/fa';
import {FaGraduationCap} from 'react-icons/fa';
import {BiBookBookmark} from 'react-icons/bi';
import {FaUsers} from 'react-icons/fa';
import {BiSearchAlt2} from 'react-icons/bi';
import { MdContacts } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { BiBookReader } from 'react-icons/bi';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';




//import necessary images

import nav1 from '../../../../images/nav/nav1.png';
import nav2 from '../../../../images/nav/nav2.png';
import nav3 from '../../../../images/nav/nav3.png';
import nav4 from '../../../../images/nav/nav4.png';
import nav5 from '../../../../images/nav/nav5.png';
import nav6 from '../../../../images/nav/nav6.png';
import nav7 from '../../../../images/nav/nav7.png';

const Mainnav = () => {
    return (
        <header className="main-nav " data-spy="affix" data-offset-top="0">
            <nav className='container' >
                <input type="checkbox" id="menu-bar" />
                <label for="menu-bar">Menu</label>
                <div className="navbar">
                    <ul className="menu">
                    <li ><a href="#"><FaHome/> HOME</a></li>
                    <li><a href="#"><BiUserPin />ABOUT <IoMdArrowDropdown/></a>
                        <ul className="submenu">
                            <li><a href="#">Company Profile</a></li>
                            <li><a href="#">Achievements</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Video Gellary</a></li>
                            <li><a href="#">Photo Gellary</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><AiFillFolderOpen /> SERVICES<IoMdArrowDropdown/></a>
                        
                              <ul className="submenu2">
                            <li><a href=""><GiGraduateCap/> EDUCATION</a></li>
                            <li><a href="">Career Counselling</a></li>
                            <li><a href="">Country Selection</a></li>
                            <li><a href="">University Selection</a></li>
                            <li><a href="">Course Selection</a></li>
                            </ul>
                              <ul className="submenu3">
                            <li><a href=""><BiBookReader/> COACHING</a></li>
                            <li><a href="">IELTS</a></li>
                            <li><a href="">TOFEL</a></li>
                            <li><a href="">PTE</a></li>
                            <li><a href="">GRE</a></li>
                            </ul>
                              <ul className="submenu4">
                            <li><a href=""><FaGlobeAmericas/> VISAS</a></li>
                            <li><a href="">USA visit visa u1 u2</a></li>
                            <li><a href="">Visit visa</a></li>
                            <li><a href="">Dependent visa</a></li>
                            
                            </ul>
                      
                    
                    </li>
                    <li><a href="#"><FaGlobeAfrica /> STUDY DESTINATIONS<IoMdArrowDropdown/></a>
                    
                        <ul className="submenu destination">
                            <li><a href=""><img src={nav1} alt="" /> <span>USA</span></a></li>
                            <li><a href=""><img src={nav2} alt="" /> <span>CANADA</span></a></li>
                            <li><a href=""><img src={nav3} alt="" /> <span>AUSTRALIA</span></a></li>
                            <li><a href=""><img src={nav4} alt="" /> <span>IRELAND</span></a></li>


                            <li><a href=""><img src={nav5} alt="" /> <span>NEW ZELAND</span></a></li>
                            <li><a href=""><img src={nav6} alt="" /> <span>GERMANY</span></a></li>
                            <li><a href=""><img src={nav6} alt="" /> <span>UK</span></a></li>
                            <li><a href=""><img src={nav7} alt="" /> <span>FRANCE</span></a></li>

                            <div className= 'view-button'>
                                <a href="" >View More...</a>
                            </div>
                            
        
                        </ul>
                    
                    
                    </li>
                    <li><a href="#"><FaGraduationCap /> HOT COURSES<IoMdArrowDropdown/></a>
                     <ul className="submenu">
                            <li><a href="#">Nursing</a></li>
                            <li><a href="#">Medicine</a></li>
                            <li><a href="#">Law</a></li>
                            <li><a href="#">Engineering</a></li>
                            <li><a href="#">Business</a></li>
                        </ul>
                    
                    
                    </li>
                    <li><a href="#"><BiBookBookmark /> EXAMS<IoMdArrowDropdown /></a>
                    <ul className="submenu">
                            <li><a href="#">IELTS</a></li>
                            <li><a href="#">TOFEL</a></li>
                            <li><a href="#">GRE</a></li>
                            <li><a href="#">PTE</a></li>
                            <li><a href="#">GMAT</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><FaUsers /> DISCUSSIONS<IoMdArrowDropdown /></a>
                       <ul className="submenu">
                            <li><a href="#">EVENTS</a></li>
                            <li><a href="#">TOPICS</a></li>
                            <li><a href="#">OFFERS</a></li>
                           
                        </ul>
                    </li>
                        <li><a href="#"><BiSearchAlt2 /> UNIVERSITY SEARCH</a></li>
                        
                        <NavLink to ='/contact'><MdContacts/> CONTACT </NavLink>
                    {/* <li><a href="#"></a></li> */}
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Mainnav;