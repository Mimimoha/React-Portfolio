import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="/">
        <i class="fi-rr-laptop option-icon"></i>About
        </a>
    </div>
    <div className="web-option">
        <a href="/projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>
    <div className="web-option">
        <a href="/contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
    <div className="web-option">
        <a href="/MariamMohamed.pdf" download>
        <i class="fi-rr-briefcase option-icon"></i>Resume
        </a>
    </div>
  </div>;
}

export default Web;