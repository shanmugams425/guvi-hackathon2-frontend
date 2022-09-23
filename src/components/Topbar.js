import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Topbar() {
  let navigate = useNavigate();

  let handleLogout = () => {
    window.localStorage.removeItem("myapptoken");
    navigate("/");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="h3">LensRental</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="product">Products</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <button onClick={handleLogout}>Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
