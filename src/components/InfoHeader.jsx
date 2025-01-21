import { useState } from "react";
import "../styles/InfoHeader.css";
import edit from "../assets/edit.png";

function InfoHeader({ formHandler, info }) {
  const [openStatus, setOpenStatus] = useState(false);

  function handleSubmit(e) {
    setOpenStatus(false);
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      title: e.target.title.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      about: e.target.about.value,
    };

    formHandler(formData);
  }

  function handleEdit(){
    setOpenStatus(true);

  }

  if (openStatus === true) {
    return (
      <div className="general-info">
        <h1>General Info</h1>
        <form className="general-info-form" action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="firstName">First name:</label>
            <input type="text" id="firstName" defaultValue={info.firstName}/>
          </div>

          <div className="input-container">
            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" defaultValue={info.lastName} />
          </div>

          <div className="input-container">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" defaultValue={info.title}/>
          </div>

          <div className="input-container">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" defaultValue={info.phone}/>
          </div>

          <div className="input-container">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" defaultValue={info.email}/>
          </div>

          <div className="about-container">
            <label htmlFor="about">About:</label>
            <textarea rows="4" cols="50" type="text" id="about" defaultValue={info.about}></textarea>
          </div>

          <div className="buttons-container">
            <button className="submit-form-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="general-info">
        <h1>General Info</h1>
        <div className="general-info-form">
          <img className="edit-button" src={edit} alt="" onClick={handleEdit} />
        </div>
      </div>
    );
  }
}

export default InfoHeader;
