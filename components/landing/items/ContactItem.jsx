import React from 'react';

const ContactItem = ({ information }) => {
    return (  
        <div className="contact-item card-shadow">
            <div className="icon"> <img src={ information.image } alt="not-found" /> </div>
            <div className="contact-info">  
                <h1> { information.title } </h1>
                <h2> { information.value } </h2>
            </div>
        </div>
    );
}
 
export default ContactItem;