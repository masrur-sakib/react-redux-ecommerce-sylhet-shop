import ProductsData from "../../data/ProductsData/ProductsData";
import { ADD_TO_CART, CLEAR_CART } from "../actions/sylhetShopActions";


const initialState = {
    products: ProductsData
}

const sylhetShopReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let newCartLocal;

            // Storing data to localstorage
            let retrieveProductsLocal = localStorage.getItem('setProductsLocal');
            let cartProductsArray = JSON.parse(retrieveProductsLocal);
            if(cartProductsArray){
                const sameProductLocal = cartProductsArray.find(pd => pd.id === action.product.id);
                if(sameProductLocal){
                    alert("Product Already Added to the Cart, You can change the quantity from Cart Page.")
                }
                else{
                    newCartLocal = [...cartProductsArray, action.product];
                    localStorage.setItem('setProductsLocal', [JSON.stringify(newCartLocal)]);
                    console.log("Product Added to the Cart");
                }
            }
            else{
                newCartLocal = [action.product];
                localStorage.setItem('setProductsLocal', [JSON.stringify(newCartLocal)]);
                console.log("Product Added to the Cart");
            }
            return {
                products: state.products,
                cart: newCartLocal
            };
        case CLEAR_CART:
            localStorage.clear();
            window.location.reload();
            return false;
        default:
            return state;
    }
}

export default sylhetShopReducers;