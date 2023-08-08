import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import About from './component/About/About';
import Rightbar from './component/Rightbar/Rightbar';
import Profile from './component/Profile/Profile';
import Intro from './component/Intro/Intro';
import Nav from './component/Nav/Nav';
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import Skills from './component/Skills/Skills';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Resume from './component/Resume/Resume';



function App() {
  AOS.init();
  return (
    <div className="App">
      <div className='video_container'>
        <video autoPlay muted loop className='body-overlay d-lg-block'>
          <source src='../assets/video1.mp4' type='video/mp4'></source>
        </video>
        <div className='container-fluid full_cnt' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className='row'>
            <div className='col-lg-4 col-xl-3 col-md-12 col-12 left_cnt'>
              <Profile />
            </div>
            <div className='col-lg-8 col-xl-9 col-md-12 col-12 d-flex cnt_3 '  >
              <div className='main_cnt'>
                <Intro />
                <About />
                <Resume />
                <Skills />
                <Portfolio />
                <Contact />
              </div>
              <div>
                <button className="btn nav_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiOutlineMenuAlt4 /></button>
                <Nav />
              </div>
              <div className='right_cnt'>
                <Rightbar />

              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
