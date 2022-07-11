import './App.css';
import Topbar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contactus';
import Product from './components/Product'

function App() {
  return (
    <div >         
          <Topbar/>
          <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/product' element={<Product></Product>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
