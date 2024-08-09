// src/App.js
import React from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ParticlesComponent from './components/particles';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ParticlesComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
