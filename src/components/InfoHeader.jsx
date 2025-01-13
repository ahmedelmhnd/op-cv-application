import { useState } from "react";
import "../styles/InfoHeader.css"

function InfoHeader({ formHandler }) {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      title: e.target.title.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      about: e.target.about.value
    };

    formHandler(formData);
  }

  return (
    <div className="general-info">
      <h1>General Info</h1>
      <form className="general-info-form" action="" onSubmit={handleSubmit}>
        <div className="input-container">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" />
        </div>

        <div className="input-container">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" />
        </div>

        <div className="input-container">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />
        </div>

        <div className="input-container">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" />
        </div>

        <div className="input-container">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" />
        </div>

        <div className="about-container">
        <label htmlFor="about">About:</label>
        <textarea rows="4" cols="50" type="text" id="about" ></textarea>
        </div>

        <button className="submit-form-button" type="submit">Save</button>
      </form>
    </div>
  );
}

export default InfoHeader;
