import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contactus";
import Product from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Reister";
import Rent from "./components/Rent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rent" element={<Rent></Rent>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
