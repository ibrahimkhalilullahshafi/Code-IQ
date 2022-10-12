import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <div>
                    <img className='header-logo' src={process.env.PUBLIC_URL + "Code IQ.png"} alt="" />
                </div>
                <div className='headings'>
                    <Link className='heading-item' to='/'>Topic</Link>
                    <Link className='heading-item' to='/stat'>Stat</Link>
                    <Link className='heading-item' to='/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;