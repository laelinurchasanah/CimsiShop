import React from 'react';
import './Style.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Cimsi Shop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Jl. Raya Bogor KM 51, Ruko Cibinong Kav 15, Bogor, Jawa Barat </li>
              <li>Email: cimsi.shop@gmail.com</li>
              <li>Phone: 021 83719800</li>
            </ul>
          </div>
        </div>
        <p className="copyright">&copy; Copyright cimsishop 2022</p>
      </footer>
    </>
  )
}

export default Footer