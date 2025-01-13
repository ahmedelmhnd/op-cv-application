import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InfoHeader from "./components/InfoHeader";
import CV from "./components/CV";

function App() {
  const [formData, setFormData] = useState({ name: "John" });

  function handleName(firstName) {
    setFormData({ ...formData, name: firstName });
  }

  return (
    <div className="container">
      <InfoHeader nameHandler={handleName}></InfoHeader>
      <CV props={formData}></CV>
      </div>
  );
}

export default App;
