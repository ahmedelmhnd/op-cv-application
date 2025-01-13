import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InfoHeader from "./components/InfoHeader";
import CV from "./components/CV";

function App() {
  const intitalForm = {
    firstName: "John",
    lastName: "Brown",
    title: "Mr.",
    phone: 999999999,
    email: "johnb@benterprise.com",
    about: "I like cats"
  };
  const [formData, setFormData] = useState(intitalForm);

  function handleForm(data) {
    setFormData(data);
  }



  return (
    <div className="container">
      <InfoHeader formHandler={handleForm}></InfoHeader>
      <CV props={formData}></CV>
    </div>
  );
}

export default App;
