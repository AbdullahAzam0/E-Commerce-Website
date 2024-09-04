import React from 'react';
import './Offers.css';
import exclusive_image from "../Assests/exclusive_image1.avif"

const Offers = () => {
    return (
        <div className='offers'> 

        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>Only On Best Sellert Product</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />

        </div>
            
        </div>
    );
}

export default Offers;
