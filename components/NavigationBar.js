import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavigationBar = () => {
  return (
    <>
    {/* <div className="navnavbar">
      <Navbar expand="md" bg="light" variant="light" fixed="top" className="bg-color">
          <Navbar.Brand href="/">
            <img src="/images/logo.png" width="40" className="d-inline-block align-top" alt="La era logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/location">LOCATION</Nav.Link>
              <Nav.Link href="/information">INFORMATION</Nav.Link>
              <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div> */}
   <header className="main-header">
    <div className="container">
      <nav className="navbar navbar-expand-lg main-nav px-0">
        <a className="navbar-brand" href="/">
					      <img src="images/logo.png" alt="la-era-logo" />
					    </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar icon-bar-1"></span>
                        <span className="icon-bar icon-bar-2"></span>
                        <span className="icon-bar icon-bar-3"></span>
                    </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ml-auto text-uppercase f1">
            <li>
              <a href="/" className="active active-first">HOME</a>
            </li>
            <li>
              <a href="/gallery">GALLERY</a>
            </li>
            <li>
              <a href="/location">LOCATION</a>
            </li>
            <li>
              <a href="/information">INFORMATION</a>
            </li>
            <li>
              <a href="/contact-us">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  </>
  )
  };

export default NavigationBar;