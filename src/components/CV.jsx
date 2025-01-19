import { useState } from "react";
import "../styles/CV.css";
import CVHeadder from "./CVHeader";


function CV({ props }) {
  return (
    <div className="cv">
      <CVHeadder info={props}></CVHeadder>
      <hr />
    </div>
  );
}

export default CV;
