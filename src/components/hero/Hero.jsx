import React, { useState } from 'react';
import './hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Fresh Vegetables\nBig discount",
            subtitle: "Save up to 50% off on your first order",
        },
        {
            title: "Organic Fruits\nBig discount",
            subtitle: "Save up to 40% off on your first order",
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
                <h1>{slides[currentSlide].title}</h1>
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
