/*
import { useState, useEffect } from "react";
import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Header from "./components/header/Header.js";
import IsHeaderDisplayed from "./components/isHeaderDisplayed/IsHeaderDisplayed.js";

import Footer from "./components/footer/Footer.js";
import Login from "./pages/Login";
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
        
          <IsHeaderDisplayed>
          <Header />
        </IsHeaderDisplayed>
        

        <Routes>
          <Route path="/login" element={<Login />} />
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

export default App; */


import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>      
    </div>
  );
}

export default App;

