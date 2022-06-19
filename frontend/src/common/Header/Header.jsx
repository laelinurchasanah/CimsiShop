import React from "react";
import './Header.css'
import Head from "./Head";
import Navbar from './Navbar';
import Search from './Search'

export default function Header({cartItem}) {
  return (
    <div>
      <Head />
      <Search cartItem={cartItem} />
      <Navbar />
    </div>
  );
}
