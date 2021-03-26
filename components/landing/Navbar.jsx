import React, { useEffect } from 'react';

const Navbar = () => {

    useEffect( () => {
        document.addEventListener('scroll', handleScroll );
    });

    const handleScroll = () => {
        const header = document.querySelector('.header.container');
        var scroll_position = window.scrollY;
        if( scroll_position > 80 ) {
            header.style.backgroundColor = "#29323C";
        } else {
            header.style.backgroundColor = "transparent";
        }
    }

    const hideMenu = () => {
        const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
        const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    }

    return (  
        <section id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <a href="#hero">  <h1> <span>D</span>iego <span>C</span>abanillas </h1>  </a>
                    </div>
                    <div className="nav-list">
                        <div className="hamburger" onClick={hideMenu}> <div className="bar"></div> </div>
                        <ul>
                            <li> <a href="#about" data-after="About" onClick={hideMenu}> Sobre Mí </a> </li>
                            <li> <a href="#services" data-after="Services" onClick={hideMenu}> Experiencia </a> </li>
                            <li> <a href="#projects" data-after="Projects" onClick={hideMenu}> Proyectos </a> </li>
                            <li> <a href="#skills" data-after="Skills" onClick={hideMenu}> Habilidades </a> </li>
                            {/*<li> <a href="#contact" data-after="Contact" onClick={hideMenu}> Contacto </a> </li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Navbar;