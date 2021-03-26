import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    line-height: 30px;
    text-align: center;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
    font-weight: 500;

    &:hover {
        font-weight: 600;
    }
`;

const ProjectItem = ( {project} ) => {

    const imgStyle = { 
        backgroundImage: "url(" + project.image + ")",
        filter: "blur(20px)"
    }

    return (
        <div className="project-item">
            <div className="project-info">
                <h1> { project.title } </h1>
                <h2> { project.subtitle } </h2>
                <p> { project.description } </p>
            </div>
            <div className="project-img">
                <div className="project-img-bg" style={ imgStyle }> </div>
                <div className="project-img-main">
                    <img src={ project.image } alt={ project.title } />
                    <Link href={ project.link.href } target="_blank">{ project.link.text }</Link> 
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;