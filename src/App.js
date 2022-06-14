
import './App.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div >

     
      <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
            
      
    </Routes>
  </BrowserRouter>


     
      
    </div>
  );
}

export default App;
