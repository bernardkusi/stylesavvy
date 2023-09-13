import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { Context } from '../context/Appcontext';
import Product from '../components/Product';


const Productspage = () => {

  const {products,setproducts}=useContext(Context)

    useEffect(() => {
        fetch('http://localhost:3001/api/products',{method:"GET"})
        .then(res => res.json())
        .then(data => {
            setproducts(data.shoes)
        })
        .catch(err =>console.log(err))
    }, []);

  return (
    <Layout>
      <main>
        <Banner page={"Our Products"} />
        <div id="Products">
          <div className="page">
            <div className="productgrid">
              {products && products.map(shoe => <Product shoe={shoe} />)}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Productspage