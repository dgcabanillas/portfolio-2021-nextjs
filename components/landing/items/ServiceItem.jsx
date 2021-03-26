import React from 'react';

const ServiceItem = ( {service} ) => {
    return (
        <div className="service-item">
            <div className="icon">
                <img src={ service.image } alt="not-found"/>
            </div>
            <h2> { service.title } </h2>
            <p>  { service.description } </p>
        </div>
    );
}

export default ServiceItem;