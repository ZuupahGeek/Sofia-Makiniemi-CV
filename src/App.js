
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbarMobile/NavbarMobile';
import Home from './views/Home'
import About from './views/About';
import Resume from './views/Resume';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Exhibitions from './views/Exhibitions';
// import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='app-navbar'><Navbar /></div>
        <div className='app-navbar-mobile'><NavbarMobile /></div>
      
        <div id='views'>    
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="exhibitions">
            <Exhibitions />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          {/* <div>
            <Footer />
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
