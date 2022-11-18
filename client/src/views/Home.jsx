import React from 'react'
import Logo from './images/Logo.png'
import Cart from './images/Cart.png'
import Pay from './images/Pay.png'
import Menu from './images/Menu.png'
import Check from './images/Check.png'
import Enjoy from './images/Enjoy.png'
import { Link, useNavigate } from 'react-router-dom'

const Home = (props) => {

    const navigate = useNavigate();

    const goToMenu = () => {
        navigate('/menu');
    }


  return (
    <>
    <div id='nav'>
        <div id='navItems'>
            <img src={Logo} alt="" id='logo'/>
            <Link to={'/'} class='link link-border-underline'><h1 id='header'>Restaurant Name</h1></Link>
        </div>

        <div id='navItems'>
            <Link class='link link-border-underline'>Login/Registration</Link>
            <Link to={'/cart'} class='link link-border-underline'><img src={Cart} alt="" height={"25px"}/></Link>
        </div>
    </div>
    <div id='bodyImg'>
        <div id='menuCard'>
            <h1>Welcome!</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim nihil vero officia, repudiandae excepturi. Temporibus, vitae! Sequi aliquid impedit quod. Ex, optio aliquam placeat doloremque veritatis molestiae explicabo quas!</h2>
            <button onClick={() => goToMenu()} class='btn btn-background-slide'>Browse our Menu</button>
        </div>
    </div>
    <div id='info'>
        <h1>How it works!</h1>
        <div id='nav'>
            <div>
                <img src={Menu} alt="" id='helpIcon'/>
                <h3>1. Browse</h3>
            </div>
            <div>
                <img src={Check} alt="" id='helpIcon'/>
                <h3>2. Choose</h3>
            </div>
            <div>
                <img src={Pay} alt="" id='helpIcon'/>
                <h3>3. Pay</h3>
            </div>
            <div>
                <img src={Enjoy} alt="" id='helpIcon'/>
                <h3>4. Enjoy!</h3>
            </div>
            
            
            
            
        </div>
    </div>
    </>
  )
}

export default Home