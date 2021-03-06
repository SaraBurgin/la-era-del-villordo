import Button from 'react-bootstrap/Button'

const Main = () => (
    <>
      <div className="first-container">
            <img src="/images/full_logo.png" alt="la era logo" className="era-logo"/>
              <h1 className="home-header">YOUR HOME AWAY FROM HOME</h1>
              <p className="home-paragraph">La Era del Villordo is a one storey villa set on a very quiet lane that boasts the most wonderful sea views. It has been newly renovated this year throughout and is modern and fresh. This gorgeous villa is available for holiday rentals throughout the year. It is just 5 mins walk to the shops and restaurants of Benalmadena Pueblo, which is a very desirable little town which has won awards for its quaintness, and 20 mins walk down to the beach.
              Our Villa is registered with the tax authorities and the Andalucian Tourism board. </p>
            <hr className="break-one"/>
      </div>
      <div className="second-container">
          <img src="/images/la-era-piscina.jpg" alt="swimming-pool-pic" className="img-la-era-pool"/>
          <div className="blue-bg">
              <p className="swimming-pool-header">THE SWIMMING POOL.</p>
              <Button className="swimming-pool-info-btn"variant="outline-primary">INFO</Button>
          </div>
      </div>
      <div className="third-container">
        <div className="txt-btn-container">
          <p className="relaxation-text">THE RELAXATION.</p>
          <Button className="relaxation-info-btn" variant="outline-primary">INFO</Button>
        </div>
        <img src="/images/barbacoa.jpg" className="bbq-img" alt="barbaque image"/>
      </div>
    </>
  );

export default Main;