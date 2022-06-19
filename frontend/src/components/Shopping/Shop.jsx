import React from "react";
import ShopCart from './ShopCart'
import './Style.css'

const Shop = ({shopItems, addToCart}) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="latest">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Latest Products </h2>
                <span className="line"></span>
              </div>
              <div className="heading-right row ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid2">
                <ShopCart shopItems={shopItems} addToCart={addToCart}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
