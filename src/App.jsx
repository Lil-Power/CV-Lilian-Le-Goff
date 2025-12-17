import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
