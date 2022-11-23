import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import ContactForm from "./Contact-Form";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
        <p>Want to get in touch? send me a message!</p>
        <ContactForm/>
    <div className="contact-container">
      <div className="contact-left">
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;

