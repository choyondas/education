import React from 'react';
import Advirtize from './Advirtize/Advirtize';
import Banner from './Banner/Banner';
import Expert from './Expert/Expert';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HotCourses from './HotCourses/HotCourses';
import Partners from './Partners/Partners';
import StudyDestination from './StudyDestination/StudyDestination';
import TrendingTopics from './TrendingTopics/TrendingTopics';
import Visa from './Visa/Visa';

const Home = () => {
    return (
        <div>
             <Header />
      <Banner />
      <Expert />
      <Advirtize />
      <StudyDestination />
      <HotCourses />
      <Visa />
      <TrendingTopics />
      <Partners />
      <Footer/>
        </div>
    );
};

export default Home;