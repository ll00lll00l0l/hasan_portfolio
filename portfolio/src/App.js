import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";


function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <div id='home'><About /></div>
      <Skill />
      <div id='project'><Project /></div>
      <div id='contact'><Contact /></div>
    </>
  );
}
export default App;
