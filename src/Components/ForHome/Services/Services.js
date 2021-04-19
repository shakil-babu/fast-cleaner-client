import React, { useState } from 'react'
import { fakeServicesData } from './data';
import './Services.css';
const Services = () => {
    const [data, setData] = useState(fakeServicesData);
    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="services-info">
                        <h5>Our Services</h5>
                        <h2>Over 20+ years Experience</h2>
                        <h3>In cleaning Service.</h3>
                        <div className="line"></div>
                    </div>

                    <div className="services-card-grid">
                        {
                            data.map((item) => {
                                return (
                                    <div className="service-card">
                                        <img src={item.img} alt="img"/>
                                        <h4>{item.title}</h4>
                                        <h3>${item.price}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Services
