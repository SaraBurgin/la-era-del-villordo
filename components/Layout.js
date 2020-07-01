import Container from 'react-bootstrap/Container'

const Layout = (props) => (
    <>
      <Container fluid className="layout-container">
        {props.children}
      </Container>
  </>
  );

  export default Layout;