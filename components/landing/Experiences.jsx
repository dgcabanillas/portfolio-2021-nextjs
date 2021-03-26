import React from 'react';
import ServiceItem from './items/ServiceItem'

const services = [
    {
        index: 0,
        image: "/img/clases.png",
        title: "Profesor de Programación",
        description: "A lo largo de mi preparación universitaria pude entender que aprender a programar puede ser complicado al inicio, por lo que una de mis estrategias para poder reforzar mi aprendizaje fue volverme profesor particular de programación, ayudando así a decenas de alumnos de distintas universidades. Esta experiencia no sólo me ayudó económicamente, si no que también me sirvió para comprender mejor la forma en que las personas expresan los requerimientos de sus problemas."
    },
    {
        index: 1,
        image: "/img/macros.png",
        title: "Automatización de procesos",
        description: "Déjame contarte que tuve la fortuna de trabajar para una empresa dedicada a las microfinanzas, y en esa maravillosa experiencia tuve la oportunidad de entender las necesidades que tenían debido a la inmensa información que ahí se maneja. Por ello fue muy importante para mi aprender a automatizar mi trabajo con las herramientas que tenía a mi alcance, como lo fueron las macros con VBA y procedures en Oracle SQL. Gracias a esta experiencia pude conocer la parte proactiva en mi."
    },
    {
        index: 2,
        image: "/img/backend.png",
        title: "Desarrollo de Software",
        description: "Después de haber trabajado con muchos lenguajes de programación, aplicado variedad de algoritmos y utilizado algunos patrones de diseño, puedo decir que el Desarrollo de Software es algo que me apasiona, ya que puedo aplicar mucho de los conocimientos que he adquirido tanto en la parte del frontend, como en el backend. Asímismo, me gusta organizar la información de tal manera que puedan ayudar a una mejor toma de decisiones",
    }
];

const Services = () => {

    return (  
        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title"> Exp<span>e</span>riencia </h1>
                    <p>
                        A través de los años he ido desarrollando y fortaleciendo mis habilidades como desarrollador de Software de manera autodidacta, y entendiendo la dificultad de los retos que tuve que superar, he logrado adquirir ciertos conocimientos y habilidades que estoy seguro podré aplicarlos para ayudarte con tus problemas.
                    </p>
                </div>
                <div className="service-bottom">
                    {services.map( service => <ServiceItem key={service.index} service={service} /> )}
                </div>
            </div>
        </section>
    );
}
 
export default Services;