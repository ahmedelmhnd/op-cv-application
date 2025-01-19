function CVHeadder({ info }) {
  return (
    <div className="cv-header">
      <h1 className="cv-header-name">{info.firstName + " " + info.lastName}</h1>
      <h3 className="cv-header-title">{info.title}</h3>
      <h3 className="cv-header-phone">{info.phone}</h3>
      <h3 className="cv-header-email">{info.email}</h3>
      <p className="cv-header-about">{info.about}</p>
    </div>
  );
}

export default CVHeadder;
