import "../styles/Education.css";

function Education({ formHandler }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      degree: e.target.degree.value,
      school: e.target.school.value,
      course: e.target.course.value,
      grade: e.target.grade.value,
      from: e.target.from.value,
      to: e.target.to.value,
      about: e.target.about.value
    };

    formHandler(formData);
  }

  return (
    <div className="education">
      <h1>Education</h1>
      <form className="education-form" action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="degree">Degree:</label>
          <select id="degree" name="degrees">
            <option value="bachelor">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="doctorate">Doctorate</option>
            <option value="diploma">Diploma</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="school">School / University:</label>
          <input type="text" id="school" />
        </div>

        <div className="input-container">
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" />
        </div>

        <div className="input-container">
          <label htmlFor="grade">GPA / WAM:</label>
          <input type="text" id="grade" />
        </div>

        <div className="input-container">
          <label htmlFor="from">Start-Date:</label>
          <input type="date" id="from" />
        </div>

        <div className="input-container">
          <label htmlFor="to">Projected / End-Date:</label>
          <input type="date" id="to" />
        </div>

        <div className="about-container">
          <label htmlFor="about">About:</label>
          <textarea rows="2" cols="40" type="text" id="about"></textarea>
        </div>

        <button className="submit-form-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Education;
