import React from "react";
import InputField from "./components/InputField";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/input" element={<InputField />} />
      </Routes>
    </div>
  );
}

export default App;