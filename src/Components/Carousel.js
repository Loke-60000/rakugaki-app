import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import '../custom.scss';
import '../css/carousel.css'
import Carousel1 from '../assets/CAROUSEL_placeholder_1.webp';
import Carousel2 from '../assets/CAROUSEL_placeholder_2.webp';
import Carousel3 from '../assets/CAROUSEL_placeholder_3.webp';

function CarouselBanner(){
    return(
        <div>
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                    className=" w-30 img-fluid"
                    src={Carousel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-30 img-fluid"
                    src={Carousel2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-30 img-fluid"
                    src={Carousel3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
        </div>
)
}

export default CarouselBanner;