import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../assets/logo.png'

export default function Search({cartItem}) {
  window.addEventListener("scroll", function() {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
    <section className="search">
      <div className="container c_flex">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="Search"></img>
          </Link>
        </div>

        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search and hit enter..."></input>
          <span>All Category</span>
        </div>
        <div className="icon f_flex width">
          <Link to="/login">
          <i className="fa fa-user icon-circle"></i>
          </Link>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{cartItem.length === 0 ? "" :cartItem.length}</span>

            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
