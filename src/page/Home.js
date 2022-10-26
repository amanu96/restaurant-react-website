import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import imageBack from '../assets/pizza.jpeg' 
function Home() {
  return <div className='home' style={{backgroundImage:`url(${imageBack})`}}>
    <div className='headerContainer' >
      <h1>Ethiopian Food</h1>
      <p>Looking for Ethipian Test</p>
      <Link to='/menu'>
      <button>Order Now</button>
      </Link>
    </div>

    </div> 

}

export default Home