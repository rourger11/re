import React from 'react'
import './Navbar.css'
import  cart from '../images/car.png'
import {NavLink,Link} from 'react-router-dom'


export default function Navigation(){
  return (

      <>
  
  <ul className='navbar'>

  <li> <p> Add Items </p></li>

  <li> <NavLink to='/'>Home </NavLink> </li>
  <div>

  <Link to='/Cart'><img src={cart} alt='abc' className='cart'/></Link>
  </div>

</ul>

</>
  )
}
