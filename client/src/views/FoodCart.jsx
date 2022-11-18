import React from "react";
import { Link } from "react-router-dom";
import Logo from './images/Logo.png'
import Cart from './images/Cart.png'

const FoodCart = (props) => {
    // const { selectedItems } = props;

    return (
        <>
        <div id='nav'>
            <div id='navItems'>
                <img src={Logo} alt="" id='logo'/>
                <Link to={'/'} class='link link-border-underline'><h1 id='header'>Restaurant Name</h1></Link>
            </div>
            <div id='navItems'>
                <Link to={'/cart'} class='link link-border-underline'><img src={Cart} alt="" height={"30px"}/></Link>
                <Link to={'/admin'} class='link link-border-underline'><h3>Admin</h3></Link>
                <Link class='link link-border-underline'><h3>Login/Register</h3></Link>
            </div>
        </div>
        <main>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO Calculate total  */}
                    {/* {
                        selectedItems.map((item, index) => 
                            <tr key={ index }>
                                <td>{ item.name }</td>
                                <td>{ item.price }</td>
                                <td>Quantity ??</td>
                            </tr>
                        )
                    } */}
                    <tr>
                        <td>Item 1</td>
                        <td>$10.99</td>
                        <td>1</td>
                        <td><button>Remove</button></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h3>Total: ???</h3>
                <div>
                    <button>Back to menu</button>
                    <button>Checkout</button>
                </div>
            </div>
        </main>
        </>
    )
}

export default FoodCart;