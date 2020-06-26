import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar-color {
    background-color: #3fabc9;
  }
  .navbar-brand, .navbar-nav, .nav-link {
    color: #ffffff;

    &:hover {
      color: #ffffff;
    }
  }
`

const NavigationBar = () => {
  return (
    <>
    <Styles className="navbar-color">
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
    </Styles>
  </>
  )
  };

export default NavigationBar;