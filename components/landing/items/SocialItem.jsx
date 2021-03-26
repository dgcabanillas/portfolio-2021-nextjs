import React from 'react';

const SocialItem = ({ info }) => {
    return (  
        <div className="social-item">
            <a target="_blank" rel="noopener noreferrer" href={ info.link }> <img src={ info.image } alt="not-found"/> </a>
        </div>
    );
}
 
export default SocialItem;