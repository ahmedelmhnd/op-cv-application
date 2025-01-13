import { useState } from "react";

function InfoHeader() {
  return <div>
    <h1>General Info</h1>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" />

  </div>;
}

export default InfoHeader;