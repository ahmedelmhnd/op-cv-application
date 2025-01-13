import { useState } from "react";

function InfoHeader({nameHandler}) {
  return <div>
    <h1>General Info</h1>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" onChange={nameHandler} />

  </div>;
}

export default InfoHeader;