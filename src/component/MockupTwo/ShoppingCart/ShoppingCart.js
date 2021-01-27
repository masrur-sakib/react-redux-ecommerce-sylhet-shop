import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = (props) => {
    return (
        <div className="shopping-cart-section">
            <div className="row cart-products-section">
                <div className="col-md-3">
                    <img src={props.product.img} alt=""></img>
                </div>
                <div className="col-md-6">
                    <p className="cart-product-name">{props.product.name}</p>
                    <p className="cart-product-description">{props.product.description}</p>
                    <p className="cart-product-price">${props.product.price}</p>
                </div>
                <div className="col-md-3 product-quantity-input-section">
                    <input className="product-quantity-input" type="number" defaultValue="1" min="1"></input>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;