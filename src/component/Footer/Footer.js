import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-light">
            <div className="footer-page-links">
                <a className="nav-link" aria-current="true" href="/">Home</a>
                <a className="nav-link" aria-current="true" href="#about">About</a>
                <a className="nav-link" aria-current="true" href="#shop">Shop</a>
                <a id="footer-last-item" className="nav-link" aria-current="true" href="#help">Help</a>
            </div>
            <p>&copy; SYLHET SHOP</p>     
        </div>
    );
};

export default Footer;