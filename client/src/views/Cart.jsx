import React from "react";

const Cart = (props) => {
    // const { selectedItems } = props;

    return (
        <>
            {/* TODO Add Navbar component */}
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
        </>
    )
}

export default Cart;