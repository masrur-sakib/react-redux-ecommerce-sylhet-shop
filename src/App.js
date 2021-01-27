import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/MockupOne/Home/Home';
import Cart from './component/MockupTwo/Cart/Cart';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import ProductsData from './data/ProductsData/ProductsData';

function App() {
  const [products] = useState(ProductsData);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const sameProduct = cart.find(pd => pd.id === product.id);
    let newCart;
    if (sameProduct) {
        alert("Product Already Added to the Cart, You can change the quantity from Cart Page.")
    }
    else {
        newCart = [...cart, product];
        setCart(newCart);

        // Storing data to localstorage
        let retrieveProductsLocal = localStorage.getItem('setProductsLocal');
        let cartProductsArray = JSON.parse(retrieveProductsLocal);
        if(cartProductsArray){
          const sameProductLocal = cartProductsArray.find(pd => product.id === pd.id);
          let newCartLocal;
          if(sameProductLocal){
            alert("Product Already Added to the Cart, You can change the quantity from Cart Page.")
          }
          else{
            newCartLocal = [...cartProductsArray, product];
            localStorage.setItem('setProductsLocal', [JSON.stringify(newCartLocal)]);
            console.log("Product Added to the Cart");
          }
        }
        else{
          localStorage.setItem('setProductsLocal', [JSON.stringify(newCart)]);
          console.log("Product Added to the Cart");
        }
    }
  };
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home products={products} handleAddProduct={handleAddProduct}></Home>
          </Route>
          <Route path="/cart">
            <Cart products={products} handleAddProduct={handleAddProduct} cart={cart}></Cart>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
