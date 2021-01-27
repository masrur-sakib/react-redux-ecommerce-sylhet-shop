import React from 'react';
import './Cart.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Summary from '../Summary/Summary';
import CartPageTitle from '../CartPageTitle/CartPageTitle';

const Cart = (props) => {
    // Retrieving Data from localstorage 
    let retrieveProductsLocal = localStorage.getItem('setProductsLocal');
    let cartProductsArray = JSON.parse(retrieveProductsLocal);

    return (
        <div id="cart" className="cart-page">
            <CartPageTitle></CartPageTitle>
            <div className="row cart-and-summary-section">
                <div className="col-md-8 cart-component-shopping-cart">
                    <h1>Shopping Cart</h1>
                    <hr width="100%"></hr>
                    {
                        cartProductsArray && cartProductsArray.map((product) => <ShoppingCart
                            key={product.id}
                            product={product}
                            >
                        </ShoppingCart>)
                    }
                    <div className="cart-products-section-buttons">
                        <div>
                            <a className="btn btn-secondary" href="#nextStep" role="button">Next</a>
                        </div>
                        <div>
                            <a className="btn btn-light" href="/" role="button">Cancel</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>Summary</h1>
                    <hr width="100%"></hr>
                    <Summary cartProductsArray={cartProductsArray} ></Summary>
                </div>
            </div>
        </div>
    );
};

export default Cart;