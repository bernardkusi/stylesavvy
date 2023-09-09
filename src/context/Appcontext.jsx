import React, { createContext, useState } from 'react'

import shoe1 from '../images/shoe1.avif'
import shoe2 from '../images/shoe2.avif'
import shoe3 from '../images/shoe3.avif'
import shoe4 from '../images/shoe4.avif'
import shoe5 from '../images/shoe5.avif'
import shoe6 from '../images/shoe6.avif'
import shoe7 from '../images/shoe7.avif'
import shoe8 from '../images/shoe8.avif'
import shoe9 from '../images/shoe9.avif'
import shoe10 from '../images/shoe10.avif'
import shoe11 from '../images/shoe11.avif'
import shoe12 from '../images/shoe12.avif'
import side1 from '../images/side1.jpg'
import side2 from '../images/side2.jpg'


export const Context = createContext([])
const Appcontext = ({ children }) => {

  const [shoes, setshoes] = useState([
    { image: shoe1, name: "Shoename", price: 270, rating: 4, },
    { image: shoe2, name: "Shoename", price: 340, rating: 5, },
    { image: shoe3, name: "Shoename", price: 230, rating: 5, },
    { image: shoe4, name: "Shoename", price: 190, rating: 5, },
    { image: shoe5, name: "Shoename", price: 170, rating: 4, },
    { image: shoe6, name: "Shoename", price: 220, rating: 5, },
    { image: shoe7, name: "Shoename", price: 270, rating: 4, },
    { image: shoe8, name: "Shoename", price: 340, rating: 5, },
    { image: shoe9, name: "Shoename", price: 230, rating: 5, },
    { image: shoe10, name: "Shoename", price: 190, rating: 5, },
    { image: shoe11, name: "Shoename", price: 170, rating: 4, },
    { image: shoe12, name: "Shoename", price: 220, rating: 5, }
  ]);

  const [sideimages, setsideimages] = useState([
    { image: side1, name: "Shoename", price: 275, rating: 4, },
    { image: side2, name: "Shoename", price: 280, rating: 5, },
  ])

  const [cart, setCart] = useState([])
  const [info, setinfo] = useState(null)

  const displayinfo = (message) => {
    setinfo(message)
    setTimeout(() => {
      setinfo(null)
    }, 1500);
  }

  const [user, setuser] = useState(null)

  const authenticate = () => {
    if (!user) {
      return false
    } else {
      return true
    }
  }

  const addtocart = (item) => {
    const itemincart = cart.filter(cartitem => cartitem === item)
    if (itemincart.length > 0) {
      displayinfo("Item already exists in cart")
    } else {
      setCart((prev) => [item, ...prev])
      displayinfo("Item added to cart")
    }
  }

  const removefromcart = (item) => {
    setCart(cart.filter(cartitem => cartitem != item))
    displayinfo("Item removed from cart")
  }

  const emptycart = () => {
    setCart([])
    displayinfo("Cart has been emptied")
  }

  const orderitems = () => {
    let authenticated = authenticate()

    if (authenticated) {
      setCart([])
      displayinfo("Order made successfully")
    } else {
      displayinfo("Please log in to continue shopping")
    }
  }

  return (
    <Context.Provider value={{
      shoes,
      cart,
      addtocart,
      removefromcart,
      emptycart,
      info,
      orderitems,
      user,
      sideimages
    }}>
      {children}
    </Context.Provider>
  )
}

export default Appcontext