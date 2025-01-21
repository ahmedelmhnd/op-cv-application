import "../styles/Experience.css";
import { useState } from "react";
import edit from "../assets/edit.png";
import InfoHeader from "./InfoHeader";

function Experience({ formHandler, info }) {
  const [openStatus, setOpenStatus] = useState(false);

  function handleSubmit(e) {
    setOpenStatus(false);
    e.preventDefault();
    const formData = {
      job1: {
        job: e.target.job1.value,
        company: e.target.company1.value,
        from: e.target.from1.value,
        to: e.target.to1.value,
        description: [
          e.target.description1a.value,
          e.target.description1b.value,
          e.target.description1c.value,
          e.target.description1d.value,
        ],
      },
      /*      job2: {
        job: e.target.job2.value,
        company: e.target.company2.value,
        from: e.target.from2.value,
        to: e.target.to2.value,
        description: [
          e.target.description2a.value,
          e.target.description2b.value,
          e.target.description2c.value,
          e.target.description2d.value,
        ],
      },*/
    };

    formHandler(formData);
  }

  function handleEdit() {
    setOpenStatus(true);
  }

  if (openStatus === true) {
    return (
      <div className="experience">
        <h1>Experience</h1>
        <form className="experience-form" action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="job1">Job Title:</label>
            <input type="text" id="job1" defaultValue={info.job1.job}/>
          </div>

          <div className="input-container">
            <label htmlFor="company1">Company:</label>
            <input type="text" id="company1" defaultValue={info.job1.company}/>
          </div>

          <div className="input-container">
            <label htmlFor="from1">Start-Date:</label>
            <input type="date" id="from1" defaultValue={info.job1.from}/>
          </div>

          <div className="input-container">
            <label htmlFor="to1">End-Date:</label>
            <input type="date" id="to1" defaultValue={info.job1.to}/>
          </div>

          <div className="description-container">
            <label htmlFor="description1a">Descriptions:</label>
            <textarea
              rows="2"
              cols="40"
              type="text"
              id="description1a"
              defaultValue={info.job1.description[0]}
            ></textarea>
          </div>

          <div className="description-container">
            <textarea
              rows="2"
              cols="40"
              type="text"
              id="description1b"
              defaultValue={info.job1.description[1]}
            ></textarea>
          </div>

          <div className="description-container">
            <textarea
              rows="2"
              cols="40"
              type="text"
              id="description1c"
              defaultValue={info.job1.description[2]}
            ></textarea>
          </div>

          <div className="description-container">
            <textarea
              rows="2"
              cols="40"
              type="text"
              id="description1d"
              defaultValue={info.job1.description[3]}
            ></textarea>
          </div>

          <button className="submit-form-button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="experience">
        <h1>Experience</h1>
        <div className="experience-form">
          <img className="edit-button" src={edit} alt="" onClick={handleEdit} />
        </div>
      </div>
    );
  }
}

export default Experience;
