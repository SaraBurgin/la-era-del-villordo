import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const Styles = styled.div`
.jumbo {
  background: url('/images/la-era-background.jpg');
  background-size: cover;
  color: white;
  height: 300px;
  background-position: center;
  z-index: -2;

  .overlay {
    background-color: #e1d9c7;
    opacity: 0.6;
  }
}
`

const Jumbo2 = () => (
    <>
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>
            Welcome to La Era del Villordo!
          </h1>
          <p>Located in Malaga, Spain</p>
        </Container>
      </Jumbotron>
    </Styles>
    </>
  );

export default Jumbo2;
