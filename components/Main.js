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
        <img src="/images/la-era-piscina.jpg" alt="swimming-pool-pic" className="la-era-piscina"/>
        <img src="/images/background-design.png" alt="light-blue-background" className="blue-background"/>
        <p className="swimming-pool-text">THE SWIMMING POOL.</p>
        <Button className="swimming-pool-info-btn"variant="outline-primary">INFO</Button>
    </div>
    <div className="third-container">
      <p className="relaxation-text">THE RELAXATION.</p>
      <img src="/images/barbacoa.jpg" className="bbq-img" alt="barbaque image"/>
      <Button className="relaxation-info-btn" variant="outline-primary">INFO</Button>
    </div>
    </>
  );

export default Main;