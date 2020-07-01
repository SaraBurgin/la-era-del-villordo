import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <img src="/images/background-design.png" className="background-left-side"/>
        <Carousel className="carousel-first" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 img-swimmingpool"
              src="/images/la-era-piscina.jpg"
              alt="First slide"
    
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Swimming Pool.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-exterior"
              src="/images/la-era-exterior.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Exterior</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-master-bedroom"
              src="/images/la-era-master-bedroom.jpg"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Master Bedroom</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <img src="/images/background-design.png" className="background-right-side"/>
    </div>
  );
}