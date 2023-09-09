import React, { useContext, useState } from 'react'
import About from '../components/About';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Layout from '../components/Layout';
import { Context } from '../context/Appcontext';

const Homepage = () => {

    const {shoes,sideimages} = useContext(Context)

    return (
        <Layout>
            <main>
                <Hero />
                <About />
                <Products shoes={shoes} sideimage={sideimages[0]} batch={0}/>
                <Gallery />
                <Products shoes={shoes} sideimage={sideimages[1]} batch={1}/>
                <Testimonials />
            </main>
        </Layout>
    )
}

export default Homepage