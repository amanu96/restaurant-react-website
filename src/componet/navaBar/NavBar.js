import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder'
import './Navbar.css';
import logo from '../../assets/pizzaLogo.png';
function NavBar() {
  const [openHidenLink , setOpenHidenLink] = useState(false);
  return (
    <div className='navbar' >
        <div className='leftSide' id={openHidenLink? 'open': 'close'}>
            <img src={logo} alt='Pizza'/>
        
        <div className='hidenLink' >
            <Link to = '/'>Home</Link>
            <Link to = 'menu'>Menu</Link>
            <Link to ='about'>About</Link>
            <Link to = 'contact'>Contact</Link>
        </div>
        </div>
        <div className='rightSide'>
            <Link to = '/'>Home</Link>
            <Link to = 'menu'>Menu</Link>
            <Link to ='about'>About</Link>
            <Link to = 'contact'>Contact</Link>
            <button onClick={() => setOpenHidenLink(!openHidenLink)}>
              <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default NavBar