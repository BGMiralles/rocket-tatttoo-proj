import React from 'react';
import './TattooStyles.css';

export const TattooStyles = () => {
    return (
        <div className="tattooStyles">
            <div className="background-banner stylesBanner" style={{ backgroundImage: `url('../../img/home-example.jpg')` }}>
                <div className="image-container">
                    <img className='image-tattoo' src='./src/img/tattoo1.jpg' alt='Tattoo 1' />
                    <img className='image-tattoo' src='./src/img/tattoo2.jpg' alt='Tattoo 2' />
                    <img className='image-tattoo' src='./src/img/tattoo3.jpg' alt='Tattoo 3' />
                </div>
            </div>
        </div>
    );
};
