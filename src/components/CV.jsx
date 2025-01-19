import { useState } from "react";
import "../styles/CV.css";
import CVHeadder from "./CVHeader";
import CVEducation from "./CVEducation";


function CV({ props }) {
  return (
    <div className="cv">
      <CVHeadder info={props.headerData}></CVHeadder>
      <hr />
      <CVEducation info={props.educationData}></CVEducation>
      <hr />
    </div>
  );
}

export default CV;
