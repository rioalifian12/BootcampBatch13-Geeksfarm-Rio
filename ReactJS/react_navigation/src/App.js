import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
