import React from 'react'
import Logo from './images/Logo.png'
import Cart from './images/Cart.png'
import Burger from './images/Burger.jpg'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  return (
    <>
    <div id='nav'>
        <div id='navItems'>
            <img src={Logo} alt="" id='logo'/>
            <Link to={'/'} class='link link-border-underline'><h1 id='header'>Restaurant Name</h1></Link>
        </div>

        <div id='navItems'>
            <Link class='link link-border-underline'>Login/Registration</Link>
            <Link class='link link-border-underline'><img src={Cart} alt="" height={"25px"}/></Link>
        </div>
    </div>

    <div class= 'container'>

        <div class="itemCard">
            <img src={Burger} alt=""/>
        </div>

        <div class="itemCard">
        <img src={Burger} alt=""/>
        </div>

        <div class="itemCard">
        <img src={Burger} alt=""/>
        </div>

        <div class="itemCard">
        <img src={Burger} alt=""/>
        </div>

        <div class="itemCard">
        <img src={Burger} alt=""/>
        </div>

        <div class="itemCard">
        <img src={Burger} alt=""/>
        </div>
        
    </div>
    </>
  )
}

export default Menu