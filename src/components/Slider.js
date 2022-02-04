import React from 'react'
import slide1 from '../img/newbox-banner-1.jpg'
import slide2 from '../img/newbox-banner-2.jpg';
import slide3 from '../img/newbox-banner-3.jpg';



const slider = () => {
    return (
    <div className="container-fluid p-0">
        <div className="row g-0">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> 
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={slide1} className="d-block w-100 slide-img" alt="newbox banner"/>
                            <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slide2} className="d-block w-100  slide-img" alt="newbox banner"/>
                            <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slide3} className="d-block w-100  slide-img" alt="newbox banner"/>
                            <div className="carousel-caption d-none d-lg-block">

                    </div>
                    </div> 
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>
            </div>
        </div>
    )
}

export default slider;
