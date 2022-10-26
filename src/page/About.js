import React from 'react'
import multiplePizza from '../assets/multiplePizzas.jpeg';
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${multiplePizza})`}}>
            
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>We, the undersigned, declare that the work which is being presented in the 
                thesis entitle, “GSM based irrigation water pump controller for farmer” 
                in partial fulfillment of the requirements for the award of degree of bachelor 
                science in Communication Engineering submitted to Electrical and Computer Engineering department,
                 Addis Ababa institute of technology [AAiT], Addis Ababa University, is an authentic record of 
                 our own work carried out under supervision of Mr. Tizazu.B. The matter presented in the 
                 thesis has not been submitted for award of any other degree of this or any other university.  </p>
        </div>
    </div>
  )
}

export default About