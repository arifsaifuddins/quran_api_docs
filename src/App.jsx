import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Docs from "./components/pages/Docs";
import Quraa from "./components/pages/Quraa";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import ToTop from "./components/layouts/ToTop";

function App() {

  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <div className="flex flex-col md:pt-20">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/quraa" element={<Quraa />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <ToTop />

      <Footer />
    </div>
  );
}

export default App;