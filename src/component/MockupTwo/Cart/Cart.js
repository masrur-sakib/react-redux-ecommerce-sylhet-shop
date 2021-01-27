import React from 'react';
import './Cart.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Summary from '../Summary/Summary';
import CartPageTitle from '../CartPageTitle/CartPageTitle';

const Cart = (props) => {
    // Retrieving Data from localstorage 
    let retrieveProductsLocal = localStorage.getItem('setProductsLocal');
    let cartProductsArray = JSON.parse(retrieveProductsLocal);

    const handleClearCart = () => {
        localStorage.clear();
        window.location.reload();
        return false;
    }

    return (
        <div id="cart" className="cart-page">
            <CartPageTitle></CartPageTitle>
            <div className="row cart-and-summary-section">
                <div className="col-md-8 cart-component-shopping-cart">
                    <h1>Shopping Cart</h1>
                    <hr width="100%"></hr>
                    <div className="cart-products-details">
                        {
                            cartProductsArray && cartProductsArray.map((product) => <ShoppingCart
                                key={product.id}
                                product={product}
                                >
                            </ShoppingCart>)
                        }
                        {
                            !cartProductsArray && <h4 className="text-danger text-center pt-5">Your Cart is empty</h4>
                        }
                    </div>
                    <div className="cart-products-section-buttons">
                        <div>
                            <button className="btn btn-secondary" >Next</button>
                        </div>
                        <div>
                            <button className="btn btn-light" onClick={() => handleClearCart()}>Cancel</button>
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