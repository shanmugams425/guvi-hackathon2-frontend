import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Topbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Product from './Product';
import Contactus from './Contactus';
import { useState } from 'react';
import Home from './Home';

function App() {

  

  return (
    <div >
   <BrowserRouter>
          
          <Topbar></Topbar>
          <Routes>
            <Route path ="/product" element={<Product/>}> </Route>
            <Route path ="/contact-us" element={<Contactus/>}> </Route>
            <Route path ="/home" element={<Home/>}> </Route>
          </Routes>
           
   </BrowserRouter>
    </div>
  );
}

export default App;
