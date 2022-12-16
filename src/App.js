import "./App.css";
import Navbar from "./components/Navbar";
import TextFoam from "./components/TextFoam";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");

  const removeClass = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };
  const toggleMode = (cls) => {
    removeClass();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
  };

  return (
    <>
      {/* <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/" element={<TextFoam mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container"> 
        <TextFoam mode={mode} />
        </div>      
    </>
  );
}

export default App;
