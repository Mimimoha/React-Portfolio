import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";
import Contact from "./contact/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Body() {
  return (

    <div className="body">
      <BrowserRouter>
        <Routes>
          {/* <section id="about"> */}
            <Route path= '/' element ={<About/>}/>
          {/* </section> */}
          {/* <section id="projects"> */}
          <Route path= '/projects' element ={<Projects/>}/>
          {/* </section> */}
          {/* <section id="skills"> */}
          <Route path= '/skills' element ={<Skills/>}/>
          {/* </section> */}
          {/* <section id="work"> */}
          <Route path= '/resume' element ={<Work/>}/>
          {/* </section> */}
          {/* <section id="contact"> */}
          <Route path= '/contact' element ={<Contact/>}/>
          {/* </section> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Body;