import React, { useContext } from 'react'
import { Context } from '../context/Appcontext'
import { Link } from 'react-router-dom'

const Hero = () => {
 const context = useContext(Context)
  return (
    <div id='hero'>
      <div className="intro">
        <h1>
          StyleSavvy
        </h1>
        <h3>
          Merging Fashion-forward Designs with Premium Materials
        </h3>
        <Link className='click' to='/products'>Shop Now</Link>
      </div>
    </div>
  )
}

export default Hero