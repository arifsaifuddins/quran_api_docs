import React from "react";
import { Routes, Route } from "react-router-dom";

import Fields from "./components/pages/Fields";
import About from "./components/pages/About";
import Header from "./components/layouts/Header";
import Home from "./components/pages/Home";
import Docs from "./components/pages/Docs";
import Rewayah from "./components/pages/Rewayah";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Footer from "./components/layouts/Footer";
import { useState } from "react";

function App() {

  const [Admin, setAdmin] = useState(false)

  return (
    <div className="flex flex-col pt-20">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/rewayah" element={<Rewayah />} />
        <Route path="/about" element={<About />} />
        {
          Admin === true && <Route path="/fields" element={<Fields />} />
        }
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;