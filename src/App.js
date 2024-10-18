
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbarMobile/NavbarMobile';
import Home from './views/Home'
// import About from './views/About';
import CV from './views/CV';
// import Projects from './views/Projects';
import Contact from './views/Contact';
import Practice from './views/Practice';
import Footer from './components/Footer/Footer';
// import Exhibitions from './views/Exhibitions';
// import Footer from './components/Footer/Footer';


function App() {
  return (
    // <BrowserRouter>
      <div>
        <div className='app-navbar'><Navbar /></div>
        <div className='app-navbar-mobile'><NavbarMobile /></div>
        <div className='views'>
          <Routes>
            {/* <div id='views'>     */}
            <Route path="/" element={<Home />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/Practice" element={<Practice />} />
            <Route path="/Contact" element={<Contact />} />
          {/* </div> */}
          </Routes>
        </div>
        <Footer/>
      </div>
    // </BrowserRouter>
  );
}

export default App;
