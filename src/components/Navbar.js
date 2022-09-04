import React from 'react';
import './Navbar.css'
import Logo from '../images/Vector.svg'

export default function Navbar(){
    return(
        <nav>
            <img src={Logo} alt='logo'/>
        </nav>
    )
}