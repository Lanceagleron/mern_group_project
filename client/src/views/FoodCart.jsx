import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from './images/Logo.png'
import Cart from './images/Cart.png'
import axios from 'axios';
import { useState } from "react";

const FoodCart = (props) => {
    const { state } = useLocation();

    const handleRemove = (e, id) => {
        console.log(id);
        console.log("remove button clicked")
    }
    
    const calculateTotal = () => {
        let total = 0.00;
        if (state !== null) {
            state.forEach(item => {
                total += parseFloat(item.price)
            });
        }
        return total.toFixed(2);
    }
    return (
        <>
        <div id='nav'>
            <div id='navItems'>
                <img src={Logo} alt="" id='logo'/>
                <Link to={'/'} className='link link-border-underline'><h1 id='header'>Restaurant Name</h1></Link>
            </div>
            <div id='navItems'>
                <Link to={'/cart'} className='link link-border-underline'><img src={Cart} alt="" height={"30px"}/></Link>
                <Link to={'/admin'} className='link link-border-underline'><h3>Admin</h3></Link>
                <Link className='link link-border-underline'><h3>Login/Register</h3></Link>
            </div>
        </div>
        <main>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state ? state.map((item, index) => 
                            <tr key={ index }>
                                <td>{ item.name }</td>
                                <td>{ item.price }</td>
                                <td><button onClick={e => handleRemove(e, item._id) }>Remove</button></td>
                            </tr>
                        ) : null
                    }
                </tbody>
            </table>
            <div>
                <h3>Total: ${ calculateTotal() }</h3>
                <div>
                    <button><Link to='/menu'>Back to menu</Link></button>
                    <button>Checkout</button>
                </div>
            </div>
        </main>
        </>
    )
}

export default FoodCart;