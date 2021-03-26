import React from 'react';

const About = () => {
    return (  
        <section id="about">
            <div className="about container">
                <div className="col-left">
                    <div className="about-img">
                        {/* 
                            <img src="/img/img-2.png" alt="img" />
                        */}
                        <img src="/img/myprofile.jpg" alt="img" />
                    </div>
                </div>
                <div className="col-right">
                    <h1 className="section-title"> Sobre <span>mí</span> </h1>
                    <h2>  Software Developer </h2>
                    <p>
                        Hola, mi nombre es Diego Cabanillas. 
                        <br/> <br/> Soy un apasionado por el uso de la tecnología en la solución de problemas. A lo largo de mi carrera profesional y laboral he podido detectar casos en los que con unas cuántas líneas de código he podido automatizar mi trabajo ahorrándome así cientos de horas para poder aprovecharlas en encontrar nuevas y mejores soluciones.
                        <br/> <br/>  Me considero una persona rebelde; pero descuida, lo digo en el sentido que me gusta desafiar las soluciones ya existentes, que aunque puedan funcionar, en la mayoría de los casos pueden ser optimizados para garantizar la agilidad de su ejecución.
                        <br/> <br/> Creo firmemente que la disciplina y la autoeducación son los puntos claves para lograr el éxito. 
                    </p>
                    <a href="DiegoCabanillas.pdf" type="button" className="cta" download>  Descargar CV </a>
                </div>
            </div>
        </section>
    );
}
 
export default About;