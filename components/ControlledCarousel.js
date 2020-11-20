import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
        <Carousel className="carousel-first" activeIndex={index} onSelect={handleSelect}>

          <Carousel.Item>
            <img
              className="d-block w-100 img-swimmingpool"
              src="/images/la-era-piscina.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100 img-exterior"
              src="/images/la-era-exterior.jpg"
              alt="exterior-img"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-master-bedroom"
              src="/images/la-era-master-bedroom.jpg"
              alt="master-bedroom-img"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-barbacue"
              src="/images/barbacoa.jpg"
              alt="barbacue-img"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-pool"
              src="/images/la-era-pool.jpg"
              alt="pool-img"
            />
          </Carousel.Item>

      </Carousel>
    </div>
  );
}