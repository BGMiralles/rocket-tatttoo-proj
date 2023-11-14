import React from 'react';
import './AboutUs.css';
import Button from 'react-bootstrap/Button';

export const AboutUs = () => {
    return (
        <div className='aboutUsDesign'>
            <div className='aboutUsDiv'>
                <img className='aboutUsLogo' src='../src/img/logo.png' alt="Logo" />
                <div className='textAboutUs'>
                    <p><span className='colourText'>Bienvenido a nuestro estudio de tatuajes Rocket Tattoo</span>, donde la tradición se encuentra con la innovación para crear obras maestras atemporales en la <span className='colourText'>piel</span>. Nos enorgullece fusionar la estética clásica del Old School con un toque moderno y fresco, brindando a nuestros clientes una experiencia única. </p>
                    <div className='buttonBookDiv'>
                        <Button className='appointmentAboutUs'>About Us</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};
