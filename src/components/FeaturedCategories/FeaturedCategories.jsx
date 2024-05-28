import React from 'react';
import './FeaturedCategories.scss';
import meva from '../../assets/meva.svg';
import c3 from '../../assets/FeaturedCategories/h3.svg'
import c2 from '../../assets/FeaturedCategories/h2.svg'
import c4 from '../../assets/FeaturedCategories/h4.svg'
import c5 from '../../assets/FeaturedCategories/h5.svg'
import c6 from '../../assets/FeaturedCategories/h6.svg'
import c7 from '../../assets/FeaturedCategories/h7.png'
import c8 from '../../assets/FeaturedCategories/h8.png'
import c9 from '../../assets/FeaturedCategories/h9.png'








const categories = [
    { title: 'Cake & Milk', items: 26, image: meva },
    { title: 'Organic Kiwi', items: 28, image: c2 },
    { title: 'Peach', items: 14, image: c3 },
    { title: 'Red Apple', items: 54, image: c4 },
    { title: 'Snack', items: 56, image: c5 },
    { title: 'Vegetables', items: 72, image: c6 },
    { title: 'Strawberry', items: 36, image: c7 },
    { title: 'Black plum', items: 123, image: c7 },
    { title: 'Custard apple', items: 34, image: c8 },
    { title: 'Coffe & Tea', items: 89, image: c9 }
];

const colors = ['#F2FCE4', '#FFFCEB', '#ECFFEC', '#FEEFEA', '#FFF3EB', '#FFF3FF', '#F2FCE4', '#FEEFEA', '#FEEFEA', '#FEEFEA'];

const FeaturedCategories = () => {
    return (
        <div className="categories-container container">
            <h2>Featured Categories</h2>
            <div className="categories">
                {categories.map((category, index) => (
                    <div className="category" key={index} style={{ backgroundColor: colors[index % colors.length] }}>
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
