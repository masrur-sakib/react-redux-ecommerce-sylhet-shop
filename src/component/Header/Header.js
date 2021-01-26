import React from 'react';
import './Header.css';
import siteLogo from '../../images/siteLogo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light site-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={siteLogo} alt="" width="220" height="70"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-between" id="navbarNavAltMarkup">
                        <div id="nav-search-bar">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            </form>
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="true" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a id="nav-last-item" className="nav-link" href="#help">Help</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-secondary"><FaShoppingCart /> Your Cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;