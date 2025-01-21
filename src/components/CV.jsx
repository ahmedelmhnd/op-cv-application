import { useState } from "react";
import "../styles/CV.css";
import CVHeadder from "./CVHeader";
import CVEducation from "./CVEducation";
import CVExperience from "./CVExperience";

function CV({ props }) {
  return (
    <div className="cv">
      <CVHeadder info={props.headerData}></CVHeadder>
      <hr />
      <CVEducation info={props.educationData}></CVEducation>
      <hr />
      <CVExperience info={props.experienceData}></CVExperience>
    </div>
  );
}

export default CV;
