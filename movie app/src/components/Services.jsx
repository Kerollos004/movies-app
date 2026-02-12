import React from 'react'
import "./services.css"
let services = [
        {
        serviceName: "watch free",
        serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam?",
        serviceIcon : "bi bi-display"
    },
        {
        serviceName: "download free",
        serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam?",
        serviceIcon : "bi bi-arrow-down",
    },
        {
        serviceName: " no adds ",
        serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam?",
        serviceIcon : "bi bi-emoji-frown"
    },
]

export default function Services() {
    let servicesHtml = services.map((service , index) => {
        return (
            <div className="service-box" key={index} >
                <i className={service.serviceIcon}></i>
                <h3>{service.serviceName}</h3>
                <p>{service.serviceDetails}</p>
            </div>
        )
    })
    return (
        <div className='services' id='service'>
            {servicesHtml}
    </div>
)
}
