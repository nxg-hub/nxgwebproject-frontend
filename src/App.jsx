import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Header from "./components/Header/Header";
import { useState } from "react";
import Training from "./pages/Training";

function App() {
  return (
    <div className="relative md:static overflow-hidden">
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
