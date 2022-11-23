import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Resume from "./resume/index";
import Contact from "./contact/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Body() {
  return (

    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/resume' element={<Resume />} /> */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Body;