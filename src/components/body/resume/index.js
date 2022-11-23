import React from "react";
import "./resume.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import ResumeCard from "./resume-card";
function Resume() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Expériences</label>
      <div className="work-list">
        {data.map((item) => {
          return <ResumeCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Resume;