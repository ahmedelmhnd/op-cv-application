import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InfoHeader from "./components/InfoHeader";
import CV from "./components/CV";
import Education from "./components/Education";

function App() {

  const intitalHeader = {
    firstName: "John",
    lastName: "Brown",
    title: "Mr.",
    phone: 999999999,
    email: "johnb@benterprise.com",
    about: "I like cats"
  };

  const initialEducation = {
    degree: "Doctorate of Philosophy",
    school: "ChatGpt University",
    course: "Prompt Engineering",
    grade: "4.0 GPA",
    from: "01/01/2030",
    to: "01/01/2035",
    about: "First Class Honours, Vice-President of procrastination club"
  }
  const initialExperience = {
    
  }

  const [headerData, setHeaderData] = useState(intitalHeader);
  const [educationData, setEducationData] = useState(initialEducation);
  const [experienceData, setExperienceData] = useState(initialExperience);

  const allData = {headerData, educationData, experienceData};

  function handleHeader(data) {
    setHeaderData(data);
  }

  function handleEducation(data) {
    setEducationData(data);
  }

  function handleExperience(data) {
    setExperienceData(data);
  }



  return (
    <div className="container">
      <div className="forms-container">
      <InfoHeader formHandler={handleHeader}></InfoHeader>
      <Education formHandler={handleEducation}></Education>
      </div>
      <CV props={allData}></CV>
    </div>
  );
}

export default App;
