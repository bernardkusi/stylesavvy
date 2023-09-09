import React, { useContext } from 'react'
import { Context } from '../context/Appcontext'

const Product = ({shoe}) => {

  const{addtocart}=useContext(Context)

  return (
    <div className="product">
    <div className="image">
       {shoe && <img src={shoe.image} alt="image" />}
    </div>
    <div className="details">
        <p className="name">Nike Shoes</p>
        <p className="rating"><span>rating </span>{shoe.rating}.0<i class="fa-solid fa-star"></i></p>
        <p className="price">${shoe.price}</p>
        <button onClick={()=>addtocart(shoe)} className="click">Buy now</button>
    </div>
</div>
  )
}

export default Product