import React from "react";
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <>
            <nav>
                <h1>Restaurant Name</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/admin/inventory'>Inventory (Admin)</Link></li>
                </ul>
            </nav>
            <main>
                <div>
                    <h2>Current Orders</h2>
                    <div>
                        <p>TODO list of all the orders</p>
                    </div>
                </div>
                <div>
                    <h2>Tables</h2>
                    <div>
                        <p>TODO list of all tables</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Admin;