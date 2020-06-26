import Container from 'react-bootstrap/Container'

const Layout = (props) => (
    <>
    <div className="general-wrapper">
      <Container>
        {props.children}
      </Container>
    </div>
  </>
  );

  export default Layout;