import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
