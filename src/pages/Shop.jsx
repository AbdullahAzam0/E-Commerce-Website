import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import NewColllections from '../Components/NewCollections/NewColllections'
import Popular from '../Components/Popular/Popular'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewColllections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
