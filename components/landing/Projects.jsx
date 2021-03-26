import React from 'react';
import ProjectItem from './items/ProjectItem';

const Projects = () => {

    const projects = [
        {
            title: "PetCare",
            subtitle: "Reserva una cita para tu pequeño compañero",
            description: "Este proyecto fue realizado siguiendo la guía de un curso que conseguí en Udemy. Está desarrollado en React y tiene la funcionalidad de registrar las citas de los clientes de una veterinaria. Actualmente no tiene implementada la parte del backend; pero en un futuro estaré terminando su desarrollo.",
            image: "/img/projects/veterinaria.png",
            link: {
                href: "https://pet-care.netlify.app/",
                text: "Visitar página",
            }
        },
        {
            title: "Space Ship",
            subtitle: "Juego de naves",
            description: "Proyecto realizado por uno de mis alumnos bajo mi supervisión. Está desarrollado en C++ y utiliza el paradigma de la programación orientada a objetos. Considero que la creación de videojuegos es una de las actividades que más refuerza todo lo aprendido en cualquier curso de programación ya que para el desarrollo del mismo requiere un alto nivel de lógica y conocimiento intermedio de la sintaxis del lenguaje.",
            image: "/img/projects/space-ship.png",
            link: {
                href: "https://github.com/dgcabanillas/juego-nave-cpp-v1",
                text: "Ver código",
            }
        }
    ]; 

    return (  
        <section id="projects">
            <div className="projects container">
                <div className="projets-header">
                    <h1 className="section-title"> Algunos <span>Proyectos</span> </h1>
                </div>
                <div className="all-projects">
                    {projects.map( ( project, index ) => <ProjectItem key={index} project={ project } /> )}
                </div>
            </div>
        </section>
    );
}
 
export default Projects;

