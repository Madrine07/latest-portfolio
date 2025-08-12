import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <div>
            <h3>Email</h3>
            <a href="mailto:denladunamis@gmail.com">denladunamis@gmail.com</a>
          </div>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <div>
            <h3>Phone</h3>
            <a href="tel:+256 7560956767">+256 7560956767</a>
          </div>
        </div>

        <div className="contact-card">
          <FaWhatsapp className="icon" />
          <div>
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/message/B7II4NFLJK7YMI"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon" />
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/madrine-denla-nansimbi-7192132b9/"
              target="_blank"
              rel="noreferrer"
            >
              Madrine Denla Nansimbi
            </a>
          </div>
        </div>

        <div className="contact-card">
          <FaTwitter className="icon" />
          <div>
            <h3>X</h3>
            <a href="https://x.com/dunamis25172?t=Qwa9oWlWkikfGR1jEBPTDw&s=09" target="_blank" rel="noreferrer">
              @dunamis25172
            </a>
          </div>
        </div>
      </div>

      <a
        href="mailto:denladunamis@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Madrine,"
        className="contact-btn"
      >
        Send Email
      </a>
    </div>
  );
}

export default Contact;
