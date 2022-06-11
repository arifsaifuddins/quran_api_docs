import React from "react";
import InputField from "./components/InputField";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/" element={<InputField />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;