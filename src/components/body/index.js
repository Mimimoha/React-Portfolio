import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Contact from "./contact/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./resume/resume";



function Body() {
  return (

    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Body;