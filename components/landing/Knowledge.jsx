import React from 'react';
import Container from 'components/general/Container';
import Content from 'components/general/Content';
import KnowledgeItem from './items/KnowledgeItem';

const skills = [
    {
        title: "Lenguajes de programación",
        description: "He utilizado estos lenguajes por muchos años, ya sea utilizando programación imperativa o programación orientada a objetos.",
        icons: [
            { image: "/img/skills/c.png",       label: "C"},
            { image: "/img/skills/cpp.png",     label: "C++"},
            { image: "/img/skills/csharp.png",  label: "C#"},
            { image: "/img/skills/python.png",  label: "Python"},
            { image: "/img/skills/java.png",    label: "Java"},
            { image: "/img/skills/js.png",      label: "Javascript"},
            { image: "/img/skills/vba.png",     label: "VBA"},
        ]
    },
    {
        title: "Gestores de bases de datos",
        description: "Como analista de gestión de información, fue necesario aprender algunos gestores de bases de datos.",
        icons: [
            { image: "/img/skills/sql.png",         label: "PL/Sql"},
            { image: "/img/skills/sql-server.png",  label: "SqlServer"},
            { image: "/img/skills/postgresql.png",  label: "PostgreSQL"},
            { image: "/img/skills/mongodb.png",     label: "MongoDB"},
        ]
    },
    {
        title: "Frameworks, librerías y herramientas web",
        description: "Como ya lo he mencionado, el desarrollo de software se ha vuelto mi pasión, por lo que sigo aprendiendo nuevas tecnologías.",
        icons: [
            { image: "/img/skills/html.png",    label: "HTML5"},
            { image: "/img/skills/css.png",     label: "CSS3"},
            { image: "/img/skills/react.png",   label: "ReactJS"},
            { image: "/img/skills/nodejs.png",  label: "NodeJS"},
            { image: "/img/skills/express.png", label: "ExpressJS"},
            { image: "/img/skills/nextjs.png",  label: "NextJS"},
            { image: "/img/skills/apollo.png",  label: "ApolloJS"},
            { image: "/img/skills/graphql.png", label: "GraphQL"},
        ]
    }
]

const Knowledge = () => {
    return (
        <section id="skills">
            <Container>
                <div>
                    <h1 className="section-title"> Mis <span> Habilidades </span> </h1>
                </div>
                <Content>
                    {
                        skills.map( 
                            (item, index) => 
                            <KnowledgeItem key={index} item={item}/>
                        )
                    }
                </Content>
            </Container>
        </section>
    )
}

export default Knowledge;
