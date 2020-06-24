import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img src="/images/logo.png" width="30" height="30" className="d-inline-block align-top" alt="La era logo"/>
          La Era del Villordo
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

export default Navigation;