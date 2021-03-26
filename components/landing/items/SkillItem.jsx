import React from 'react';

const SkillItem = ({ skill }) => {
    return (  
        <div className="skill-item card-shadow">
            <img src={ skill.image } alt="not-found"/>
        </div>
    );
}
 
export default SkillItem;