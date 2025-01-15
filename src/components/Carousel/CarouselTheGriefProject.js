import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CarouselComponent.css'
import { Carousel } from 'react-responsive-carousel';
import TGP_IMG01 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_02_23_10.Still001.png'
import TGP_IMG02 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_09_41_08.Still033.png'
import TGP_IMG03 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_17_30_10.Still091.png'
import TGP_IMG04 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_26_11_11.Still136.png'
import TGP_IMG05 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_42_28_22.Still162.png'
import TGP_IMG06 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_42_45_15.Still168.png'
import TGP_IMG07 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_43_08_01.Still172.png'
import TGP_IMG08 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_49_26_26.Still215.png'
import TGP_IMG09 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15/PXL_20240207_171715490.TS.mp4.00_57_01_23.Still244.png'
import TGP_IMG10 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15 2/8.jpg'
import TGP_IMG11 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15 2/ACAPS02_Bacon_0187_010.jpg'
import TGP_IMG12 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15 3/11.jpg'
import TGP_IMG13 from '../../assets/artwork/The Grief Project webiste/OneDrive_1_2024-10-15 3/3.jpg'
import TGP_IMG14 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 2/1.png'
import TGP_IMG15 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 2/2.png'
import TGP_IMG16 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 2/5.png'
import TGP_IMG17 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 3/I am Eve Bewailing the Death of Abel kopiera.png'
import TGP_IMG18 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 3/I am Mourning Britannia kopiera (kopia).png'
import TGP_IMG19 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 3/The Mourning Virgin; I am kopiera.png'
import TGP_IMG20 from '../../assets/artwork/The Grief Project webiste/OneDrive_2_2024-10-15 3/The Weeping Burgher.png'
import TGP_IMG21 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse1.jpg'
import TGP_IMG22 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse2.jpg'
import TGP_IMG23 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse3.jpg'
import TGP_IMG24 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse4.jpg'
import TGP_IMG25 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse5.jpg'
import TGP_IMG26 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse6.jpg'
import TGP_IMG27 from '../../assets/artwork/The Grief Project webiste/WarehouseImages/warehouse7.jpg'



class CarouselTheGriefProject extends Component {
    render() {
        return (
            <Carousel swipeable emulateTouch infiniteLoop useKeyboardArrows>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG01} />
                    </div>
                    {/* <p className="legend">Art Deco In Poole</p> */}
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG02} />
                    {/* <p className="legend">Cross Section</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom ">
                    <div>
                    <img className='carousel-image'alt='' src={TGP_IMG03} />
                    {/* <p className="legend">Kristina</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG04} />
                    {/* <p className="legend">The Avenue</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG05} />
                    {/* <p className="legend">Venus</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG06} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                <div>
                    <img className='carousel-image' alt='' src={TGP_IMG07} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG08} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG09} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG21} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG22} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG23} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG24} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG25} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG26} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG27} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG10} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG11} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
               
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG14} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG15} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG16} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG17} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG18} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG19} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG20} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG12} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
                <div className="carousel-item-custom">
                    <div>
                    <img className='carousel-image' alt='' src={TGP_IMG13} />
                    {/* <p className="legend">Youngest Sibling</p> */}
                    </div>
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default CarouselTheGriefProject