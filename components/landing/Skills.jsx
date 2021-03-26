import React from 'react';
import SkillItem from './items/SkillItem';

const skills = [
    { image: "/img/skills/c.png" },
    { image: "/img/skills/cpp.png" },
    { image: "/img/skills/csharp.png" },
    { image: "/img/skills/python.png" },
    { image: "/img/skills/java.png" },

    { image: "/img/skills/matlab.png" },
    { image: "/img/skills/octave.png" },
    { image: "/img/skills/unity.png" },
    { image: "/img/skills/vba.png" },
    { image: "/img/skills/excel.png" },
    { image: "/img/skills/word.png" },

    { image: "/img/skills/powerpoint.png" },
    { image: "/img/skills/sql.png" },
    { image: "/img/skills/html.png" },
    { image: "/img/skills/css.png" },
    { image: "/img/skills/js.png" },

    { image: "/img/skills/react.png" },
    { image: "/img/skills/nodejs.png" },
    { image: "/img/skills/express.png" },
    { image: "/img/skills/mongodb.png" },
    { image: "/img/skills/github.png" }
]

const Skills = () => {

    return (
        <section id="skills">
            <div className="skills container">
                <div className="projets-header">
                    <h1 className="section-title"> Mis <span> Habilidades </span> </h1>
                </div>
                <div className="all-skills">
                    {skills.map( (skill, index) => <SkillItem key={index} skill={skill} /> )}
                </div>
            </div>
        </section>
    )
}

export default Skills;