function CVExperience({ info }) {
  return (
    <div className="cv-experience">
      <h1 className="cv-experience-head">Experience</h1>
      <h3 className="cv-experience-date">{info.job1.from + " to " + info.job1.to}</h3>

      <h2 className="cv-experience-job">{info.job1.job}</h2>

      <h3 className="cv-experience-company"> {info.job1.company} </h3>

      <ul className="cv-experience-description">
        <li>{info.job1.description[0]}</li>
        <li>{info.job1.description[1]}</li>
        <li>{info.job1.description[2]}</li>
        <li>{info.job1.description[3]}</li>
      </ul>
    </div>
  );
}

export default CVExperience;
