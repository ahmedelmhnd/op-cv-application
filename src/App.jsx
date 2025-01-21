import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InfoHeader from "./components/InfoHeader";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const intitalHeader = {
    firstName: "John",
    lastName: "Brown",
    title: "Mr.",
    phone: 999999999,
    email: "johnb@benterprise.com",
    about: "I like cats",
  };

  const initialEducation = {
    degree: "Doctorate",
    school: "ChatGpt University",
    course: "Prompt Engineering",
    grade: "4.0 GPA",
    from: "2030-01-01",
    to: "2035-01-01",
    about: "First Class Honours, Vice-President of procrastination club",
  };
  const initialExperience = {
    job1: {
      job: "Sandwich Artist",
      company: "SubMart",
      from: "2018",
      to: "2020",
      description: [
        "Crafted culinary masterpieces with a side of lettuce.",
        "Specialized in the art of perfectly symmetrical mayonnaise swirls.",
        "Consistently maintained an impressive record of not eating the inventory.",
        "Managed customer requests like 'extra pickles but not too pickly.'",
      ],
    },

    job2: {
      job: "Professional Cat Wrangler",
      company: "Purrfection Cat Café",
      from: "2030-01-01",
      to: "2035-01-01",
      description: [
        "Mastered the fine balance of petting and refilling water bowls.",
        "Developed groundbreaking techniques in laser pointer diplomacy.",
        "Facilitated cat-human interactions with minimal scratches.",
        "Rescued the café mascot, Mr. Fluffy, from the ventilation ducts... twice.",
      ],
    },
  };

  const [headerData, setHeaderData] = useState(intitalHeader);
  const [educationData, setEducationData] = useState(initialEducation);
  const [experienceData, setExperienceData] = useState(initialExperience);

  const allData = { headerData, educationData, experienceData };

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
        <InfoHeader formHandler={handleHeader} info={headerData}></InfoHeader>
        <Education formHandler={handleEducation} info={educationData}></Education>
        <Experience formHandler={handleExperience} info={experienceData}></Experience>
      </div>
      <CV props={allData}></CV>
    </div>
  );
}

export default App;
