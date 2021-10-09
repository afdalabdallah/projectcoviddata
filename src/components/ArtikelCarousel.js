import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ArtikelCarousel() {
    return (
        <div>
             <Carousel>
                <div>
                    <img src='./LOGO_1.png' alt="logo"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src='./LOGO_1.png' alt="logo"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src='./LOGO_1.png' alt="logo"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default ArtikelCarousel
