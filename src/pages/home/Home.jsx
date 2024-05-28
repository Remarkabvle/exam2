import React, { useEffect, useState } from 'react'
import './home.scss'
import Hero from '../../components/hero/Hero'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import ProductList from '../../components/products/Products'
import AboutGet from '../../components/abuotget/AboutGet'

const Home = () => {

  return (
    <div className='home'>
      
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
      <ProductList/>
      <AboutGet/>
    </div>
  )
}

export default Home