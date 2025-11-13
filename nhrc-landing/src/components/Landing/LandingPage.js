import React from "react";
import NavbarSection from "../Navbar";
import HeroSection from "../HeroSection";
import AboutUs from "../AboutUs";
import BoardMembers from "../BoardMembers";
import Service from "../Service";
import CurrentJobs from "../CurrentJobs";
import Chapters from "../Chapters";
import Events from "../Events";
import ContactUs from "../ContactUs";
import GetInTouch from "../GetInTouch";
import Footer from "../Footer";



function LandingPage(){
    return(
        <>

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
        </>
    )
}
export default LandingPage;