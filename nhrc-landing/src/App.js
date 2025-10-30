
import NavbarSection from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import BoardMembers from './components/BoardMembers';
import Service from './components/Service';
import CurrentJobs from './components/CurrentJobs';
import Chapters from './components/Chapters';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import Employeer from './components/Membership/Employeer';
import Member from './components/Membership/Member';



function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <HeroSection/>
      <AboutUs/>
      <BoardMembers/>
      <Service/>
      <CurrentJobs/>
      <Chapters/>
      <Events/>
      <ContactUs/>
      <GetInTouch/>
      <Footer/>
      {/* <Employeer/> */}
    </div>
  );
}

export default App;
