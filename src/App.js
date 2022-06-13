
import './App.css';
import Advirtize from './components/Advirtize/Advirtize';
import Banner from './components/Banner/Banner';
import Expert from './components/Expert/Expert';

import Header from './components/Header/Header';
import HotCourses from './components/HotCourses/HotCourses';
import Partners from './components/Partners/Partners';
import StudyDestination from './components/StudyDestination/StudyDestination';
import TrendingTopics from './components/TrendingTopics/TrendingTopics';
import Visa from './components/Visa/Visa';

function App() {
  return (
    <div >
      <Header />
      <Banner />
      <Expert />
      {/* <Advirtize /> */}
      <StudyDestination />
      <HotCourses />
      <Visa />
      <TrendingTopics />
      <Partners/>
      
    </div>
  );
}

export default App;
