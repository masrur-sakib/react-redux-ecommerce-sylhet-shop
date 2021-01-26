import React from 'react';
import './Shop.css';

const Shop = (props) => {
    return (
        <div id="shop" className="shop-section">
            <div className="grid-area grid-area-1">
                <img src={props.products[0].img} alt="" />
                <div className="shop-product-details">
                    <div>
                        <p>{props.products[0].name}</p>
                        <p>{props.products[0].price}</p>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="grid-area grid-area-2">
                <img src={props.products[1].img} alt="" />
                <div className="shop-product-details">
                    <div>
                        <p>{props.products[1].name}</p>
                        <p>{props.products[1].price}</p>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="grid-area grid-area-3">
                <img src={props.products[2].img} alt="" />
                <div className="shop-product-details">
                    <div>
                        <p>{props.products[2].name}</p>
                        <p>{props.products[2].price}</p>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="grid-area grid-area-4">
                <img src={props.products[3].img} alt="" />
                <div className="shop-product-details">
                    <div>
                        <p>{props.products[3].name}</p>
                        <p>{props.products[3].price}</p>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="grid-area grid-area-5">
                <img src={props.products[4].img} alt="" />
                <div className="shop-product-details">
                    <div>
                        <p>{props.products[4].name}</p>
                        <p>{props.products[4].price}</p>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;