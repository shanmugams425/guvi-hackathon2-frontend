import { Navbar, Nav, Container } from 'react-bootstrap'

function Topbar() {
  
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
    
       </div>
        )
}
  


export default Topbar;