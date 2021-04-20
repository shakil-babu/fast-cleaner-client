import React, { Component, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { testiMonialData } from '../Services/data';
import './Testimonial.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

const Testimonial = () => {

    const [data, setData] = useState([]);
    const fetchReviewData = () => {
        fetch('http://localhost:5500/reviewInfo')
        .then(res => res.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        fetchReviewData();
    }, [])
    return(
        <div className="testimonial-area">
            <div className="testi-overly">
            <div className="container">
                <div className="services-info">
                        <h5>Testimonial</h5>
                        <h2>What client say?</h2>
                        <h3>About our services.</h3>
                        <div className="line"></div>
                    </div>
                <div className="testimonial-layout">
                    <Carousel  itemsToScroll={2} itemsToShow={2}  
                        breakPoints={breakPoints}
                        onResize={currentBreakPoint => console.log(currentBreakPoint)}>
                        {
                            data.map(item => {
                                return (
                                    <div className="testimonial-card">
                                            <div className="flex-testi-info">
                                                <div className="first-letter">
                                                    <h5>{item.name.substr(0,1)}</h5>
                                                </div>
                                                <div className="info-testi">
                                                <h2>{item.name}</h2>
                                                <p>{item.company}</p>
                                            </div>
                                            </div>
                                        <p>{item.review}</p>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
            </div>
        </div>
    )
} 

export default Testimonial ;