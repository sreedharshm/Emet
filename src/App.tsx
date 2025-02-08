import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage"; // Import your HomePage component
import ProductPage from "./ProductPage"; // Import your ProductPage component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/products" element={<ProductPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
