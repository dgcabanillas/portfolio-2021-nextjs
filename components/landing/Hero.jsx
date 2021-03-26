import React from 'react';

const Hero = () => {
    return (  
        <section id="hero">
            <div className="hero container">
                <div>
                    <h1> Hola, <span></span> </h1>
                    <h1> Mi Nombre Es <span></span> </h1>
                    <h1> Diego <span></span> </h1>
                    <a href="#projects" type="button" className="cta"> Portafolio </a>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;