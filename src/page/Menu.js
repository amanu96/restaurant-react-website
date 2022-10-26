import React from 'react'
import {MenuList} from '../Helper/MenuList';
import MenuItem from '../componet/menuItem/MenuItem';
import './Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <p className='menuTitle'>Menu List</p>
      <div className='menuList'>
        {MenuList.map((menu,key) => {
          return <MenuItem key = {key} image={menu.image} name={menu.name} price={menu.price}/>
        })}
      </div>
    </div>
  )
}

export default Menu