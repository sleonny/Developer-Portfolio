import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import AboutMe from "./components/aboutme/aboutme";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Resume from "./components/resume/resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
