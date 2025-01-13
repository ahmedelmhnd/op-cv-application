import { useState } from "react";


function InfoHeader({nameHandler}) {

    function handleName(e) {
        nameHandler(e.target.value);
    }

  return <div>
    <h1>General Info</h1>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" onChange={handleName} />

  </div>;
}

export default InfoHeader;