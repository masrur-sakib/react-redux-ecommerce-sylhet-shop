import React, { useState } from 'react';
import './Home.css';
import TopSection from '../TopSection/TopSection';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Newsletter from '../Newsletter/Newsletter';
import Shop from '../Shop/Shop';
import About from '../About/About';
import ProductsData from '../../../data/ProductsData/ProductsData'

const Home = () => {
    const [products] = useState(ProductsData);
    return (
        <div>
            <TopSection products={products}></TopSection>
            <FeaturedProducts products={products}></FeaturedProducts>
            <Newsletter></Newsletter>
            <Shop products={products}></Shop>
            <About></About>
        </div>
    );
};

export default Home;