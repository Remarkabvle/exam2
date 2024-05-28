import React, { useState } from 'react';
import './hero.css';
import hero1 from '../../assets/hero1.png'; 
import hero2 from '../../assets/hero2.jpg'; 


const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Fresh Vegetables\nBig discount",
            subtitle: "Save up to 50% off on your first order",
            backgroundImage: `url(${hero1})`, 
        },
        {
            title: "Organic Fruits\nBig discount",
            subtitle: "Save up to 40% off on your first order",
            backgroundImage: `url(${hero2})`, 
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="hero-container container" style={{ backgroundImage: slides[currentSlide].backgroundImage }}>
            <div className="hero-content">
                <h1>{slides[currentSlide].title.split('\n').map((line, index) => (
                    <React.Fragment key={index}>{line}<br /></React.Fragment>
                ))}</h1>
                <p>{slides[currentSlide].subtitle}</p>
                <div className="subscribe">
                    <input type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Hero;
