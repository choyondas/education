
import './App.css';
import Advirtize from './components/Advirtize/Advirtize';
import Banner from './components/Banner/Banner';
import Expert from './components/Expert/Expert';

import Header from './components/Header/Header';
import HotCourses from './components/HotCourses/HotCourses';
import StudyDestination from './components/StudyDestination/StudyDestination';

function App() {
  return (
    <div >
      <Header />
      <Banner />
      <Expert />
      <Advirtize />
      <StudyDestination />
      <HotCourses/>
      
    </div>
  );
}

export default App;
