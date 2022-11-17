import React, {useState, useEffect} from 'react'
import Logo from './images/Logo.png'
import Cart from './images/Cart.png'
import Burger from './images/Burger.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Menu = (props) => {

    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/menuItems/")
        .then(res => {
            console.log(res.data)
            setAllItems(res.data)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <>
    <div id='nav'>
        <div id='navItems'>
            <img src={Logo} alt="" id='logo'/>
            <Link to={'/'} className='link link-border-underline'><h1 id='header'>Restaurant Name</h1></Link>
        </div>

        <div id='navItems'>
            <Link to={'/dev'} className='link link-border-underline'><h3>Admin</h3></Link>
            <Link className='link link-border-underline'><h3>Login/Registration</h3></Link>
            <Link className='link link-border-underline'><img src={Cart} alt="" height={"30px"}/></Link>
        </div>
    </div>
    {/* {JSON.stringify(allItems)} */}
    <div className= 'container'>
        {
            allItems.map((eachItem, i) => {
                return (
                    <div style={{
                        backgroundImage : `url(${eachItem.src})`, 
                        height:"200px", 
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'}} className="itemCard" key={i} for="item">
                            <div className='menuInfo'>
                                <input type="checkbox" name="" id="item" className='checkBox'/> <br />
                                <span for="item">{eachItem.name}</span> <br />
                                <span>${eachItem.price}</span> <br />
                                
                            </div>
                            
                            
                    </div>
                )
                
            })
        }
        
    </div>
    </>
  )
}

export default Menu