import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus-wrapper container py-3 mt-1" id="contact">
      <h4 className="contact-title mb-4">CONTACT US</h4>

      <div className="row align-items-start g-4">
        <div className="col-md-5">
          <iframe
            title="YSK Info Tech Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3806.603278608347!2d78.44210156998241!3d17.430816377469913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPavani%20prestige%20complex%2C%20beside%20RS%20brothers%2C%205th%20floor%2C%20beside%20Sterling%20Overseas%20Education%20Consultants%2C%20Ameerpet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1761130387063!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-md-7">
          <h6 className="fw-bold">Corporate Address :</h6>
          <p className="mb-1">
            Pavani prestige complex, 5th floor,Ameerpet, Hyderabad
          </p>
          <h6 className="fw-bold">Land Mark :</h6>
          <p className="mb-1">
            Above RS Brothers,Ameerpet
          </p>
          <h6 className="fw-bold mt-3">Phone Number :</h6>
          <p className="mb-1">Call Us: +91 99633 77035</p>
          <h6 className="fw-bold mt-3">E-mail Address :</h6>
          <p className="mb-0">info@nhrclub.com</p>
        </div>
      </div>

     
    </div>
  );
};

export default ContactUs;
