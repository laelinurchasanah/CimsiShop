import React from 'react'
import Home from '../components/mainpage/Home';
import FlashSale from '../components/FlashSale/FlashSale'
import Shop from '../components/Shopping/Shop'
import Wrapper from '../components/wrapper/Wrapper'

export default function Pages({productItems,cartItem, addToCart, shopItems}) {
  return (
    <>
    <Home cartItem={cartItem} />
    <FlashSale productItems={productItems} addToCart={addToCart}/>
    <Shop shopItems={shopItems} addToCart={addToCart}/>
    <Wrapper />
    </>
  )
}
