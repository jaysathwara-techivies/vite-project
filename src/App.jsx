import "./App.css";
import {
  FormControl,
  InputGroup,
  Container,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetail';
import ProductCompare from './components/ProductCompare'

function App() {
  useEffect(() => {

  }, []);

  
  return (
    <div>

<Router>
      <div className="App">
    <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
          <Route path="/" element={<ProductDetails />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/product-compare" element={<ProductCompare />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>
)
}

export default App;
