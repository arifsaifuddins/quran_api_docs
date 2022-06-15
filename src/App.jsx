import React, { useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

import Fields from "./components/pages/Fields";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Docs from "./components/pages/Docs";
import Quraa from "./components/pages/Quraa";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Footer from "./components/layouts/Footer";
import { useState } from "react";
import Header from "./components/layouts/Header";

function App() {

  const [Admin, setAdmin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('admin') == 'Arief Saifuddien' || localStorage.getItem('admin') == 'Toyin Muhammed') {
      setAdmin(true)
    } else if (!localStorage.getItem('admin')) {
      setAdmin(false)
    }
  })

  return (
    <div className="flex flex-col pt-20">
      <Header admin={Admin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/quraa" element={<Quraa />} />
        <Route path="/about" element={<About />} />
        {Admin === true && <Route path="/fields" element={<Fields />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;