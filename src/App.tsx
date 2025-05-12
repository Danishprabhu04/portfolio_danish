import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "../src/pages/landing";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Main landing page */}
          <Route path="*" element={<div>404 Not Found</div>} /> {/* 404 fallback */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
