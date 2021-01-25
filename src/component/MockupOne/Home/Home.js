import React from 'react';
import './Home.css';
import TopSection from '../TopSection/TopSection';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Newsletter from '../Newsletter/Newsletter';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import About from '../About/About';

const Home = () => {
    return (
        <div className="container">
            <h1>Home Component</h1>
            <TopSection></TopSection>
            <FeaturedProducts></FeaturedProducts>
            <Newsletter></Newsletter>
            <ProductsGrid></ProductsGrid>
            <About></About>
        </div>
    );
};

export default Home;