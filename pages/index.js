import React, { Fragment } from 'react';
import Navbar from 'components/landing/Navbar';
import Hero from 'components/landing/Hero';
import Experiences from 'components/landing/Experiences';
import Projects from 'components/landing/Projects';
import About from 'components/landing/About';
import Skills from 'components/landing/Skills';
import Contact from 'components/landing/Contact';
import Footer from 'components/landing/Footer';
import Knowledge from 'components/landing/Knowledge';

const Landing = () => {
    return (  
        <Fragment>
            <Navbar />
            <Hero />
            <About />
            <Experiences />
            <Projects />
            {/*<Skills />*/}
            <Knowledge />
            <Contact />
            <Footer />
        </Fragment>
    );
}
 
export default Landing;
