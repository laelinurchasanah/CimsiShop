import { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from './pages/Pages'
import Cart from './common/cart/Cart.jsx'
import "./App.css";
import Header from "./common/Header/Header";
import FlashData from "./components/FlashSale/FlashData"
import SData from './components/Shopping/SData'
import Footer from './common/Footer/Footer.jsx'
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from './pages/Account/Login.jsx'
import Regis from './pages/Account/Regis.jsx'
import Category from './components/AllProducts/Category'


function App() {
  // Fetch data from database
  const {productItems} = FlashData
  const {shopItems} = SData
  
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }else{
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
  }else {
    setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  }
}

  return (
    <>
      <Router>
        <Header cartItem={cartItem}/>
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
           </Route>
           <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
           </Route>
           <Route path="/about">
            <AboutUs />
           </Route>
           <Route path="/contact">
            <ContactUs />
           </Route>
           <Route path="/login">
            <Login />
           </Route>
           <Route path="/regis">
            <Regis />
           </Route>
           <Route path="/product">
            <Category  />
           </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
