import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () =>(
    
    <ul className='navbar'>
    <NavLink to='/' className='linkkkk'><li>Home</li></NavLink>  
    <NavLink to='/movies' className='linkkkk'><li>Movies</li></NavLink>  
    </ul>
)

export default Navbar;