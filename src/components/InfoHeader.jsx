import { useState } from "react";

function InfoHeader({ nameHandler }) {
  function handleSubmit(e) {
    e.preventDefault();
    nameHandler(e.target.name.value);
  }

  return (
    <div>
      <h1>General Info</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <button type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default InfoHeader;
