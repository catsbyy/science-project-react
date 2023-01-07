import { useState, useEffect } from "react";
import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Business from "./pages/Business";
import Student from "./pages/Student";
import SuccessfulRegistration from "./pages/SuccessfulRegistration";
import Results from "./pages/Results";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        
        <ScrollToTop />
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/student/:id" element={<Student />} />
          <Route path="/business" element={<Business />} />
          <Route path="/success" element={<SuccessfulRegistration />} />
          <Route path="/results" element={<Results />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
