import React, { useState } from "react";

export const MainHome = () => {
    return (
        <div className="homeDesign">
          <div className="bg-home" style={{ backgroundImage: `url('../../img/home.jpg')` }}>
            <div className="logo">
              <img className='logoPage' src='../../img//rocket_tattoo_logo-removebg-preview.png' />
            </div>
          </div>
        </div>
      );
};
