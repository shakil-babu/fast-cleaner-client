import React from 'react'
import { pricingData } from '../Services/data'
import './Pricing.css';
const Pricing = () => {
    
    return (
        <>
            <section className="pricing-area">
                <div className="container">
                    <div className="services-info">
                        <h5>Our Pricing</h5>
                        <h2>We can clean your residential</h2>
                        <h3>Space including homes.</h3>
                        <div className="line"></div>
                    </div>


                    <div className="pricing-grid-layout">
                        {
                            pricingData.map(item => {
                                return (
                                    <div className="pricing-card">
                                        {
                                            item.off && <span className='les'>{item.off}</span>
                                        }
                                        <h1>{item.type}</h1>

                                        <div className="rates">
                                            <span className='prices'><span className="dollar">$</span>{item.price}</span>
                                            <span className='users'>{item.per}</span>
                                        </div>
                                        <hr/>
                                        <div className="item">
                                            {
                                                item.services.map((sr) => {
                                                    return <h4>{sr}</h4>
                                                })
                                            }
                                        </div>
                                        <button className='price-btn'>BOOK NOW</button>

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

export default Pricing
