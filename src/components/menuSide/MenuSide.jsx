import React from 'react'
import './menuSide.scss'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const MenuSide = ({user,toggleMenu,menuRef}) => {
  return (
      <div onClick={()=>toggleMenu()} ref={menuRef} className='navbar-menu-show'>
          <ul>
              <li>About</li>
              <li>Contact</li>
              {
                  user ? (
                   <> <li>{user.userName}</li>
                     <li>Logout</li></>) : (
                   <>
                          <Link to="/login"><li>Login</li></Link>
                          <Link to="/register"><li>Register</li></Link>
                      </>
                  )
              }

              <li><Link to="/cart"><ShoppingCartOutlinedIcon /></Link></li>
          </ul>
      </div>
  )
}

export default MenuSide