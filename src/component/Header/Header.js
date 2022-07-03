import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <h2>Online Sport Shop</h2>
            <img src={logo} alt="" />
            <div className="navbar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/About">About</a>
                    <a href="/Cart">Cart</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;