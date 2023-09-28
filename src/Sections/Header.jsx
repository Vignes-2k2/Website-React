import { Link } from 'react-router-dom'
import "./Styles/header.css"
import { useState } from 'react';
import Dropdown from './Dropdown';

function Header() {
    
    const[dropDownState, setdropDownState] = useState(false);

    const toogleDropDown = () => {
        setdropDownState(!dropDownState);
    }

    return (
    <>
    <div className="header-main">
        <div className="left">
            <Link to="/"><img src="/src/assets/Header-Images/Sample-Logo.png" alt="LOGO" /></Link>
        </div>
        <div className="right">
            <p className='header-option' onClick={toogleDropDown}>Products  
            </p>
            {dropDownState && <Dropdown/>}
            <Link to="/coupons" className='header-option'>Coupons and Deals</Link>
            <Link to="/blog" className='header-option'>Blog</Link>
            <Link to="/about" className='header-option'>About Us</Link>
            <Link to="/contact" className='header-button'>Contact Us</Link>
        </div>
    </div>
    </>
    )
}


export default Header;