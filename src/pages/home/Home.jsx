import React, { useEffect, useState } from 'react'
import './home.scss'
import Hero from '../../components/hero/Hero'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

const Home = () => {

  return (
    <div className='home'>
      
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home