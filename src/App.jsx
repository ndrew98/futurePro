import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar component to show on all pages */}
      <Navbar />

      {/* Main content area */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:id" element={<ApplyJob />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </div>

      {/* Footer component to show on all pages */}
      <Footer />
    </div>
  );
};

export default App;
