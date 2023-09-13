import React, { useContext } from 'react'
import Product from './Product'
import { Context } from '../context/Appcontext'

const Products = ({ shoes, batch, sideimage }) => {
    const {addtocart} = useContext(Context)
    return (
        <div id='products'>
            <div className="page">
                <h3 className="heading" style={{ textAlign: "left" }}>About Us</h3>
                <p className="subheading" style={{ textAlign: "left" }}>Merging Fashion-forward Designs with Premium Materials</p>
                <div>
                    <div className="image">
                        <img src={sideimage.image} alt={sideimage.name} style={{ filter: "brightness(80%)", position: "absolute" }} />
                        <div className="details">
                            <p className="name">Nike Shoes</p>
                            <p className="rating"><span>rating </span>{sideimage.rating}.0<i className="fa-solid fa-star"></i></p>
                            <p className="price">${sideimage.price}</p>
                            <button onClick={() => addtocart(sideimage)} className="click">Buy now</button>
                        </div>
                    </div>
                    <div className="productsgrid">
                        {shoes && shoes.map((shoe, index) => {
                            if ((index >= 6 * batch) && (index < (6 * (batch + 1)))) {
                                return <Product key={index} shoe={shoe} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products