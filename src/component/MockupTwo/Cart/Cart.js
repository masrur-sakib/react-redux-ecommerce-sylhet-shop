import React from 'react';
import './Cart.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Summary from '../Summary/Summary';

const Cart = () => {
    return (
        <div className="container">
            <h1>Cart Component</h1>
            <ShoppingCart></ShoppingCart>
            <Summary></Summary>
        </div>
    );
};

export default Cart;