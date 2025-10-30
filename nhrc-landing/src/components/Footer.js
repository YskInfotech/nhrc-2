import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Footer.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-topbar  text-white py-2 ">
        <h3>Get connected with us on social networks:</h3>
        
         <div className="ficons">
              <FaLinkedin className="m-2" />
              <FaTwitter className="m-2"/>
              <FaFacebook className="m-2"/>
              <FaSquareInstagram className="m-2"/>
          </div>
        </div>
      

      <div className="footer-main text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-2">
              <h5 className="footer-title">NHRC</h5>
              <p className="footer-text">
                At NHRC, we are committed to sharing and transferring HR
                knowledge globally. Our platform offers a wealth of resources,
                webinars, and articles to help you stay updated with the latest
                HR trends and best practices.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 mb-2">
              <h6 className="footer-heading">Solutions</h6>
              <ul className="list-unstyled">
                <li>Network</li>
                <li>Jobs</li>
                <li>Upskill</li>
                <li>Chapters</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-2">
              <h6 className="footer-heading">Explore</h6>
              <ul className="list-unstyled">
                <li>Ecommerce</li>
                <li>Initiative</li>
                <li>Events</li>
                <li>Discover</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-2">
              <h6 className="footer-heading">Knowledge hub</h6>
              <ul className="list-unstyled">
                <li>Certifications</li>
                <li>Brand assets</li>
                <li>Awards</li>
                <li>Blogs / Podcasts</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-2">
              <h6 className="footer-heading">Account</h6>
              <ul className="list-unstyled">
                <li>Sign in / Register</li>
                <li>Membership</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
