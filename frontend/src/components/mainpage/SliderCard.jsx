import React from 'react'
import SliderData from './SlideData.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom';


export default function SliderCard() {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          appendDots: (dots) => {
            return <ul style={{ margin: "0px"}}>{dots}</ul>
          }
        }

  return (
    <>
    <Slider {...settings}>
    {SliderData.map((value, index) => {
        return(
            <div className="box d_flex top" key ={index}>
                <div className="left">
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <Link to="/products">
                    <button className="btn-primary">Visit Collections</button>
                    </Link>
                </div>
                <div className="right">
                    <img src={value.cover} alt='' width="450px"></img>
                </div>

            </div>
        )
    })}
    </Slider>
    </>
  )
}
