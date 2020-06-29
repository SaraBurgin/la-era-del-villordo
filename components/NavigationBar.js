import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">
            <img src="/images/logo.png" width="55" className="d-inline-block align-top" alt="La era logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/location">Location</Nav.Link>
              <Nav.Link href="/information">Information</Nav.Link>
              <Nav.Link href="/contact-us">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  </>
  )
  };

export default NavigationBar;