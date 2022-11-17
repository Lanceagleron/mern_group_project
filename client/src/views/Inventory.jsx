import React, {  useState, useEffect } from "react";
import axios from 'axios';

const Inventory = () => {
    const [ menuItems, setMenuItems ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const [ newMenuItem, setNewMenuItem ] = useState({
        name: '',
        description: '',
        src: '',
        price: 0.00,
        inStock: false,
        category: ''
    })

    useEffect(() => {
        // make api call
        axios.get('http://localhost:8000/api/menuItems/')
            .then(res => {
                console.log(res.data)
                setMenuItems(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [loaded]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newMenuItem)

        axios.post('http://localhost:8000/api/menuItems/', newMenuItem)
            .then(res => {
                console.log(res)
                setLoaded(false)
                setNewMenuItem({
                    name: '',
                    description: '',
                    src: '',
                    price: '',
                    inStock: false,
                    category: ''
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (e, id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/menuItems/${id}`)
            .then(res => {
                console.log(res)
                setMenuItems(menuItems.filter(item => item._id !== id))
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <nav>
                <h1>Restaurant Name</h1>
                <ul>
                    <li>Dashboard</li>
                    <li><button onClick={e => console.log("This button doesn't do anything yet")}>Logout</button></li>
                </ul>
            </nav>
            <main>
                <div>
                    <h2>Inventory</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>In Stock?</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menuItems.map((item, index) => 
                                    <tr key={ index }>
                                        <td>{ item.name }</td>
                                        <td>{ item.description }</td>
                                        <td>{ item.category }</td>
                                        <td>${ item.price }</td>
                                        <td>{ item.inStock ? "Yes" : "No"}</td>
                                        <td>
                                            <button onClick={e =>  console.log("This button doesn't do anything yet")}>View</button>
                                            <button onClick={e =>  console.log("This button doesn't do anything yet")}>Edit</button>
                                            <button onClick={e => handleDelete(e, item._id )}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>Add Menu Item</h2>
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <label>Name: </label>
                            <input type="text" value={ newMenuItem.name } onChange={ e => setNewMenuItem({...newMenuItem, name: e.target.value })}/>
                        </div>
                        <div>
                            <label>Description: </label>
                            <input type="text" value={ newMenuItem.description } onChange={ e => setNewMenuItem({...newMenuItem, description: e.target.value })}/>
                        </div>
                        <div>
                            <label>Image URL: </label>
                            <input type="text" value={ newMenuItem.src } onChange={ e => setNewMenuItem({...newMenuItem, src: e.target.value })}/>
                        </div>
                        <div>
                            <label htmlFor="">Price: $</label>
                            <input type="number" min={0.00} step={0.01} value={ newMenuItem.price } onChange={ e => setNewMenuItem({...newMenuItem, price: e.target.value })}/>
                        </div>
                        <div>
                            <label htmlFor="">In Stock? </label>
                            <input type="checkbox" checked={ newMenuItem.inStock } onChange={e => setNewMenuItem({...newMenuItem, inStock: e.target.checked })}/>
                        </div>
                        <div>
                            <label htmlFor="">Category: </label>
                            <select value={ newMenuItem.category } onChange={ e => setNewMenuItem({...newMenuItem, category: e.target.value })}>
                                <option  value="">- Select Category -</option>
                                <option value="Appetizer">Appetizer</option>
                                <option value="Entrée">Entrée</option>
                                <option value="Side Dish">Side Dish</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Beverage">Beverage</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Inventory;