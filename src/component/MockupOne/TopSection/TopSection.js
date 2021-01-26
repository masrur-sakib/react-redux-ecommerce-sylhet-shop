import React from 'react';
import './TopSection.css';

const TopSection = (props) => {
    return (
        <div className="top-section">
            <h2 className="top-section-tagline">One shop for all of your needs.</h2>
            <hr width="20%"></hr>
            <div className="top-section-image-section">
                <div><img src={props.products[0].img} alt=""></img></div>
                <div><img src={props.products[1].img} alt=""></img></div>
                <div><img src={props.products[2].img} alt=""></img></div>
            </div>
            <a className="btn btn-secondary" href="#shop" role="button">Shop Now</a>
        </div>
    );
};

export default TopSection;