import React, {useState, useEffect} from 'react'
import Logo from './images/Logo.png'
import Cart from './images/Cart.png'
// import Burger from './images/Burger.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Menu = (props) => {
    const [allItems, setAllItems] = useState([])
    const [ selectedItemsIds, setSelectedItemsIds ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/menuItems/")
        .then(res => {
            setAllItems(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleCheck = (e) => {
        e.target.checked ? setSelectedItemsIds([...selectedItemsIds, e.target.value]) : setSelectedItemsIds(selectedItemsIds.filter(id => id !== e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedItems = allItems.filter(item => selectedItemsIds.includes(item._id));
        navigate('/cart', {
            state: selectedItems
        });
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
            <form onSubmit={ handleSubmit } className= 'container'>
                {
                    allItems.map((eachItem, i) => {
                        return (
                            <div style={{
                                backgroundImage : `url(${eachItem.src})`, 
                                height:"200px", 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'}} className="itemCard" key={i}>
                                    <div className='menuInfo'>
                                        <input type="checkbox" id="item" className='checkBox' value={ eachItem._id } onChange={(e) => handleCheck(e) }/> <br />
                                        <span>{eachItem.name}</span> <br />
                                        <span>${eachItem.price}</span> <br />
                                        {
                                            eachItem.inStock == true ? (
                                                <div className='menuInfo'>
                                                    <input type="checkbox" name="" id="item" className='checkBox'/> <br />
                                                    <span for="item">{eachItem.name}</span> <br />
                                                    <span>${eachItem.price}</span> <br />
                                                </div>
                                            ) : (
                                                <div className='menuInfo'>
                                                    <input type="checkbox" name="" id="item" className='checkBox' disabled/> <br />
                                                    <span for="item"><s>{eachItem.name}</s> Unavailable</span>  <br />
                                                    <span>${eachItem.price}</span> <br />
                                                </div>
                                            )
                                        }  
                                    </div>
                                    
                                    
                            </div>
                        )})
                }
                <input type="submit" value="Add To Cart" />
            </form>
        </>
    )
}

export default Menu;