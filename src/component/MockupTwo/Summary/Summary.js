import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const {cartProductsArray} = props;
    
    // Summary Data Calculation
    let subTotal=0;
    let taxes = 0;
    let total = 0;
    if(cartProductsArray){
        for(let i=0; i<cartProductsArray.length; i++){
            const product = cartProductsArray[i];
            subTotal = subTotal + product.price;
        }
        taxes = subTotal*0.02;
        total = subTotal + taxes;
    }

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