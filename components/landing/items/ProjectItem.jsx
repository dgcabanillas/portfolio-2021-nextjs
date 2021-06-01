import React from 'react';
import styled from '@emotion/styled';

const LinksContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    display: block;
    width: 180px;
    line-height: 40px;
    text-align: center;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 10px auto;

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
                {
                    project.descriptions.map( description => <p> { description } </p> )
                }
                
            </div>
            <div className="project-img">
                <div className="project-img-bg" style={ imgStyle }> </div>
                <div className="project-img-main">
                    <img src={ project.image } alt={ project.title } />
                    <LinksContainer>
                    {
                        project.links.map( 
                            link => 
                            <Link 
                                href={ link.href } 
                                target="_blank"
                            >{ link.text }</Link> 
                        )
                    }
                    </LinksContainer>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;