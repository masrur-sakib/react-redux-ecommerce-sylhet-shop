import React from 'react';
import './Summary.css';

const Summary = (props) => {
    // Summary Data Calculation
    const {cartProductsArray} = props;
    let subTotal=0;
    for(let i=0; i<cartProductsArray.length; i++){
        const product = cartProductsArray[i];
        subTotal = subTotal + product.price;
    }
    let taxes= subTotal*0.02;
    let total = subTotal + taxes;

    return (
        <div className="summary-section">
            <input className="coupon-code-input" type="text" placeholder="Enter Coupon Code"></input>
            <hr width="100%"></hr>
            <div className="row">
                <div className="col-md-9">
                    <p>SUBTOTAL</p>
                </div>
                <div className="col-md-3">
                    <p>${subTotal}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <p>SHIPPING</p>
                </div>
                <div className="col-md-3">
                    <p>FREE</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <p>TAXES (2%)</p>
                </div>
                <div className="col-md-3">
                    <p>{taxes.toFixed(2)}</p>
                </div>
            </div>
            <hr width="100%"></hr>
            <div className="row">
                <div className="col-md-9">
                    <h4>Total</h4>
                </div>
                <div className="col-md-3">
                    <h4>${total}</h4>
                </div>
            </div>
        </div>
    );
};

export default Summary;