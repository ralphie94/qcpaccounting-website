import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Tax from './components/pages/Tax';
import Bookkeeping from './components/pages/Bookkeeping';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/tax" element={<Tax/>} />
          <Route path="/bookkeeping" element={<Bookkeeping/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
