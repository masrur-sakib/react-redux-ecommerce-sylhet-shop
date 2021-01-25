import React from 'react';
import './Cart.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Summary from '../Summary/Summary';
import Footer from '../../Footer/Footer';

const Cart = () => {
    return (
        <div className="container">
            <h1>Cart Component</h1>
            <ShoppingCart></ShoppingCart>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Cart;