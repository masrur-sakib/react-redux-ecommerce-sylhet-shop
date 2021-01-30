import React from 'react';
import { connect } from 'react-redux';
import { productQuantityChange } from '../../../redux/actions/sylhetShopActions';
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
                    <input className="product-quantity-input" type="number" defaultValue={props.product.quantity}  min="1" 
                    onChange={(e) => {
                        let retrieveProductsLocal = localStorage.getItem('setProductsLocal');
                        let cartProductQtyChange = JSON.parse(retrieveProductsLocal);
                        
                        let productQuantityLocal = cartProductQtyChange.find(pd => pd.id === props.product.id);
                        for(let i=0; i<cartProductQtyChange.length; i++){
                            if(cartProductQtyChange[i].id === productQuantityLocal.id){
                                cartProductQtyChange[i].quantity = parseInt(e.target.value);
                                localStorage.setItem('setProductsLocal', [JSON.stringify(cartProductQtyChange)]);
                                window.location.reload();
                            }
                        }
                    }}
                    ></input>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = {
    productQuantityChange: productQuantityChange

};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);