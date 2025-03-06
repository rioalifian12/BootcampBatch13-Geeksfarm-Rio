import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Nav from "../layouts/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AddContact from "../pages/AddContact";
import DetailContact from "../pages/DetailContact";

const AppRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:name" element={<DetailContact />} />
        <Route path="/contact/add" element={<AddContact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
