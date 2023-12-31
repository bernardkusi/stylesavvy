import React, { useContext } from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import { Context } from '../context/Appcontext'

const Cartpage = () => {
    const {cart,removefromcart,emptycart,orderitems}= useContext(Context)
  return (
    <Layout>
    <main>
        <div className="page">
            <div style={{height:"3rem"}}></div>
            <div className="cartflex">
               {(cart && cart.length>0) ? cart.map(item=>( <div key={item.id} className="cart">
                    <div className="image">
                        <img src={require(`../images/${item.image}.avif`)} alt={item.name} />
                    </div>
                    <div className="details">
                        <p className="itemname">
                            {item.name}
                        </p>
                        <p className="itemprice">
                            ${item.price}
                        </p>
                        <p className="itemdescription">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aliquid beatae, quibusdam velit laborum dolorem distinctio labore.
                        </p>
                        <p className="rating"><span style={{color:"grey"}}>rating {item.rating}.0</span><i class="fa-solid fa-star"></i></p>
                    </div>

                    <div className="button">
                        <button className="click" onClick={()=>removefromcart(item)}>Remove item</button>
                    </div>
                </div>)):<div>No Items In Cart</div>}

                {(cart && cart.length>0) &&(
                    <div className='buttons'>
                <button className='click' onClick={emptycart}>Remove All Items</button>
                <button className='click' onClick={orderitems}>Order now</button>
                </div>
                )}
            </div>
        </div>
    </main>
</Layout>
  )
}

export default Cartpage