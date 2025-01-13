import { useState } from "react";

function CV({props}) 
{

    return(
        <div className="cv">
            <h1>{props.firstName + " " + props.lastName}</h1>
            <h3>{props.title}</h3>
            <h3>{props.phone}</h3>
            <h3>{props.email}</h3>
            <p>{props.about}</p>
        </div>
    );
}

export default CV;