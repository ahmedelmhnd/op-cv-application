import InfoHeader from "./InfoHeader";

function CVEducation({ info }) {
  return (
    <div className="cv-education">
      <h1 className="cv-education-head">Education</h1>
      <h3 className="cv-education-date">{info.from + " to " + info.to}</h3>
      
      <h2 className="cv-education-course">
        {info.course}
        <span className="cv-education-degree"> - {info.degree}</span>
      </h2>

      <h3 className="cv-education-school">{info.school} <span className="cv-education-grade">
         - Grade: <span className="cv-education-grade-score">{info.grade}</span>
      </span></h3>
      
      <p className="cv-education-about">{info.about}</p>
    </div>
  );
}

export default CVEducation;
