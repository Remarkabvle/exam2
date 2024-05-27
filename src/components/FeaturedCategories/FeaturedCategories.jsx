import React from 'react';
import './FeaturedCategories.scss';
import meva from '../../assets/meva.svg'

const categories = [
    { title: 'Cake & Milk', items: 26, image: meva },
    { title: 'Organic Kiwi', items: 28, image: meva },
    { title: 'Peach', items: 14, image: meva },
    { title: 'Red Apple', items: 54, image: meva },
    { title: 'Snack', items: 56, image: meva },
    { title: 'Vegetables', items: 72, image: meva },
    { title: 'Strawberry', items: 36, image: meva },
    { title: 'Black plum', items: 123, image: meva },
    { title: 'Custard apple', items: 34, image: meva },
    { title: 'Coffe & Tea', items: 89, image: meva }
];

const FeaturedCategories = () => {
    return (
        <div className="categories-container container">
            <h2>Featured Categories</h2>
            <div className="categories">
                {categories.map((category, index) => (
                    <div className="category" key={index}>
                        <img src={category.image} alt={category.title} />
                        <h3>{category.title}</h3>
                        <p>{category.items} Items</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
