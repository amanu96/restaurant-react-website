import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg';
import './Contact.css';
const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${pizzaLeft})`}}>
        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='Fname'>First Name </label> 
                <input name='Fname' placeholder='First Name' type={'text'}/>
                <label htmlFor='Lname'>Last Name</label>
                <input name='Lname' placeholder='Last Name' type={'text'}/>
                <label htmlFor='email' > email</label>
                <input name='email' placeholder='email' type={'email'}/>
                <label htmlFor='message' > Message</label>
                <textarea rows={6} name='message' placeholder='Enetr Message'></textarea>
                <button type='submits'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact