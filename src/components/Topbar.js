import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Home from './Home';
import Contact from './Contactus';
import Product from './Product'

function Topbar() { {
  
        return (
       <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand  className='h3'>LensRental</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='home'>Home</Nav.Link>
              <Nav.Link href="product">Products</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
          </Container>
        </Navbar>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/product' element={<Product></Product>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
       </div>
        )
}}
    


export default Topbar;