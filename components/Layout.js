import Navbar from 'react-bootstrap/Navbar';
import NavBar from './NavigationBar';
import Footer from './Footer';

const Layout = (props) => (
    <>
      <div className="layout-container">
        <NavBar />
        {props.children}
        <Footer />
      </div>
  </>
  );

  export default Layout;