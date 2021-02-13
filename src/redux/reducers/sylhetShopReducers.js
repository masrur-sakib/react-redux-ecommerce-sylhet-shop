import ProductsData from "../../data/ProductsData/ProductsData";
import { ADD_TO_CART, CLEAR_CART, PRODUCT_QUANTITY_CHANGE } from "../actions/sylhetShopActions";


const initialState = {
    products: ProductsData,
    cart: [],
    summaryData: {
        subTotal: 0,
        taxes: 0,
        total: 0
    }
}

const sylhetShopReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let cartAfterAdd = [];
            let summaryDataAfterAdd = {
                subTotal: 0,
                taxes: 0,
                total: 0
            }
            if(state.cart){
                cartAfterAdd = state.cart;
                const productExists = state.cart.find(pd => pd.id === action.product.id);
                if(productExists){
                    alert("Product Already Added to the Cart, You can change the quantity from Cart Page.")
                }
                else{
                    cartAfterAdd = [...cartAfterAdd, action.product];
                    alert("Product Added to the Cart.");
                }
            }
            else{
                cartAfterAdd = [action.product];
                alert("Product Added to the Cart.");
            }

            if(cartAfterAdd){
                for(let i=0; i<cartAfterAdd.length; i++){
                    const product = cartAfterAdd[i];
                    summaryDataAfterAdd.subTotal = summaryDataAfterAdd.subTotal + (product.price*product.quantity);
                }
                summaryDataAfterAdd.taxes = summaryDataAfterAdd.subTotal*0.02;
                summaryDataAfterAdd.total = summaryDataAfterAdd.subTotal + summaryDataAfterAdd.taxes;
            }
            return {
                products: state.products,
                cart: cartAfterAdd,
                summaryData: summaryDataAfterAdd
            };

        case PRODUCT_QUANTITY_CHANGE:
            let cartAfterQtyChange = state.cart;
            let summaryDataAfterQtyChange = {
                subTotal: 0,
                taxes: 0,
                total: 0
            }
            for(let i=0; i<cartAfterQtyChange.length; i++){
                if(cartAfterQtyChange[i].id === action.productId){
                    cartAfterQtyChange[i].quantity = parseInt(action.changedQtyValue);
                }
            }

            if(cartAfterQtyChange){
                for(let i=0; i<cartAfterQtyChange.length; i++){
                    const product = cartAfterQtyChange[i];
                    summaryDataAfterQtyChange.subTotal = summaryDataAfterQtyChange.subTotal + (product.price*product.quantity);
                }
                summaryDataAfterQtyChange.taxes = summaryDataAfterQtyChange.subTotal*0.02;
                summaryDataAfterQtyChange.total = summaryDataAfterQtyChange.subTotal + summaryDataAfterQtyChange.taxes;
            }
            return {
                products: state.products,
                cart: cartAfterQtyChange,
                summaryData: summaryDataAfterQtyChange
            };
            
        case CLEAR_CART:
            window.location.href = "/";
            return {
                products: state.products,
                cart: [],
                summaryData: {
                    subTotal: 0,
                    taxes: 0,
                    total: 0
                },
            };
        
        default:
            return state;
    }
}

export default sylhetShopReducers;