import React, { useContext } from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { Context } from '../context/Appcontext';
import Product from '../components/Product';


const Productspage = () => {

  const {shoes}=useContext(Context)

  return (
    <Layout>
      <main>
        <Banner page={"Our Products"} />
        <div id="Products">
          <div className="page">
            <div className="productgrid">
              {shoes && shoes.map(shoe => <Product shoe={shoe} />)}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Productspage