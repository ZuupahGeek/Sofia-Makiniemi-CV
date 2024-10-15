import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CarouselComponent.css'
import { Carousel } from 'react-responsive-carousel';
import ArtDecoInPoole from '../../assets/artDecoInPoole.jpg'
import CrossSection from '../../assets/crossSection.jpg'
import Kristina from '../../assets/kristina.jpg'
import TheAvenue from '../../assets/theAvenue.jpg'
import Venus from '../../assets/venus.jpg'
import YoungestSibling from '../../assets/PoppyBG.JPG'


class CarouselComponent extends Component {
    render() {
        return (
            <Carousel>
                <div className="carousel-item">
                    <img alt='Art Deco In Poole' src={ArtDecoInPoole} />
                    <p className="legend">Art Deco In Poole</p>
                </div>
                <div className="carousel-item">
                    <img alt='Cross Section' src={CrossSection} />
                    <p className="legend">Cross Section</p>
                </div>
                <div className="carousel-item">
                    <img alt='Kristina' src={Kristina} />
                    <p className="legend">Kristina</p>
                </div>
                <div className="carousel-item">
                    <img alt='The Avenue' src={TheAvenue} />
                    <p className="legend">The Avenue</p>
                </div>
                <div className="carousel-item">
                    <img alt='Venus' src={Venus} />
                    <p className="legend">Venus</p>
                </div>
                <div className="carousel-item">
                    <img alt='Youngest Sibling' src={YoungestSibling} />
                    <p className="legend">Youngest Sibling</p>
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default CarouselComponent