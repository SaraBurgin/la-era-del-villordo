import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Jumbo2 = () => (
    <>
    <Jumbotron fluid className="jumbo">
      <Container>
      <img src="/images/la-era-background.jpg" />
        <h1>
          Welcome to La Era del Villordo!
        </h1>
        <p>We are in Malaga, Spain</p>
      </Container>
    </Jumbotron>
    </>
  );

export default Jumbo2;
