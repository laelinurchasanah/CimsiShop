import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {

    const [MobileMenu, setMobileMenu] = useState(false);

  return (
   <>

   <header className="header">
    <div className="container d_flex">
        <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>Categories<i className="fa fa-chevron-down"></i></h4>
        </div>

        <div className="navLink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Products</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                {
                    MobileMenu? <i className="fas fa-times close home-btn"></i> :
                    <i className="fa fa-bars open"></i>
                }
            </button>
        </div>


    </div>

   </header>
   
   </>
  )
}
