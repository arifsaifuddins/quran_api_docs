import React from "react";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-around mx-auto mt-16 mb-10">
        <img src="./icon/quran.png" alt="icon" className="w-20" />
        <h1 className="text-6xl ml-5">Quran Rewayah GUI</h1>
      </div>
      <InputField />
    </div>
  );
}

export default App;