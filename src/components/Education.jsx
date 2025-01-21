import "../styles/Education.css";
import { useState } from "react";
import edit from "../assets/edit.png"

function Education({ formHandler, info }) {

  const [openStatus, setOpenStatus] = useState(false);

  function handleSubmit(e) {
    setOpenStatus(false);
    e.preventDefault();
    const formData = {
      degree: e.target.degree.value,
      school: e.target.school.value,
      course: e.target.course.value,
      grade: e.target.grade.value,
      from: e.target.from.value,
      to: e.target.to.value,
      about: e.target.about.value
    };

    formHandler(formData);
  }

  function handleEdit(){
    setOpenStatus(true);

  }

    if (openStatus === true) {
      return (
        <div className="education">
          <h1>Education</h1>
          <form className="education-form" action="" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="degree">Degree:</label>
              <select id="degree" name="degrees" defaultValue={info.degree}>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctorate">Doctorate</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>
    
            <div className="input-container">
              <label htmlFor="school">School / University:</label>
              <input type="text" id="school" defaultValue={info.school} />
            </div>
    
            <div className="input-container">
              <label htmlFor="course">Course:</label>
              <input type="text" id="course" defaultValue={info.course} />
            </div>
    
            <div className="input-container">
              <label htmlFor="grade">GPA / WAM:</label>
              <input type="text" id="grade" defaultValue={info.grade}/>
            </div>
    
            <div className="input-container">
              <label htmlFor="from">Start-Date:</label>
              <input type="date" id="from" defaultValue={info.from}/>
            </div>
    
            <div className="input-container">
              <label htmlFor="to">Projected / End-Date:</label>
              <input type="date" id="to" defaultValue={info.to}/>
            </div>
    
            <div className="about-container">
              <label htmlFor="about">About:</label>
              <textarea rows="2" cols="40" type="text" id="about" defaultValue={info.about}></textarea>
            </div>
    
            <button className="submit-form-button" type="submit">
              Save
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="education">
          <h1>Education</h1>
          <div className="education-form">
            <img className="edit-button" src={edit} alt="" onClick={handleEdit} />
          </div>
        </div>
      );
    }


}

export default Education;
