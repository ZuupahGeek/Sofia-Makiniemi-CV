import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CarouselComponent.css'
import { Carousel } from 'react-responsive-carousel';
import TEP_IMG01 from '../../assets/artwork/The Everyday Project website/At home -store camera 013 liten.png'
import TEP_IMG02 from '../../assets/artwork/The Everyday Project website/At home -store camera 027 liten.png'
import TEP_IMG03 from '../../assets/artwork/The Everyday Project website/IMG_6888.png'
import TEP_IMG04 from '../../assets/artwork/The Everyday Project website/Light.png'
import TEP_IMG05 from '../../assets/artwork/The Everyday Project website/Smokescreen.png'
import TEP_IMG06 from '../../assets/artwork/The Everyday Project website/Stillbild 2.jpg'
import TEP_IMG07 from '../../assets/artwork/The Everyday Project website/Stillbild 3.jpg'
import TEP_IMG08 from '../../assets/artwork/The Everyday Project website/Stillbild.jpg'
import TEP_IMG09 from '../../assets/artwork/The Everyday Project website/The Everyday Triptych detalj.jpg'
import TEP_IMG10 from '../../assets/artwork/The Everyday Project website/Video.png'
import TEP_IMG11 from '../../assets/artwork/The Everyday Project website/The Everyday Triptych digital.jpg'


class CarouselTheEverydayProject extends Component {
    render() {
        return (
            <Carousel swipeable emulateTouch infiniteLoop>
                <div className="carousel-item-custom">
                    <img alt='Art Deco In Poole' src={TEP_IMG01} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Cross Section' src={TEP_IMG02} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Kristina' src={TEP_IMG03} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Youngest Sibling' src={TEP_IMG09} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Youngest Sibling' src={TEP_IMG11} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Kristina' src={TEP_IMG10} />
                    {/* <p className="legend"></p> */}
                </div>
                
                
                <div className="carousel-item-custom">
                    <img alt='Youngest Sibling' src={TEP_IMG06} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Youngest Sibling' src={TEP_IMG07} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Youngest Sibling' src={TEP_IMG08} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='The Avenue' src={TEP_IMG04} />
                    {/* <p className="legend"></p> */}
                </div>
                <div className="carousel-item-custom">
                    <img alt='Venus' src={TEP_IMG05} />
                    {/* <p className="legend"></p> */}
                </div>
                
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default CarouselTheEverydayProject