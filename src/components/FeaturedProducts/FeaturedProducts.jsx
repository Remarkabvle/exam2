import React from 'react';
import './FeaturedProducts.scss';
import image from '../../assets/b1.png';
import image2 from '../../assets/b2.png';
import image3 from '../../assets/b3.png';



const products = [
    { 
        title: 'Everyday Fresh & Clean with Our Products', 
        backgroundImage: `url(${image})`, 
        buttonText: 'Shop Now' 
    },
    { 
        title: 'Make your Breakfast Healthy and Easy', 
        backgroundImage: `url(${image2})`, 
        buttonText: 'Shop Now' 
    },
    { 
        title: 'The best Organic Products Online', 
        backgroundImage: `url(${image3})`, 
        buttonText: 'Shop Now' 
    }
    
];

const FeaturedProducts = () => {
    return (
        <div className="products-container">
            <div className="products">
                {products.map((product, index) => (
                    <div 
                        className="product-card" 
                        key={index}
                        style={{ backgroundImage: product.backgroundImage }}
                    >
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <button>{product.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
