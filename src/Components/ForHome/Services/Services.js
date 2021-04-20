import React, { useEffect, useState } from 'react'
import './Services.css'; 
import {MdFavorite} from 'react-icons/md';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ServicesContext } from '../../../App';
const Services = ({isNav}) => {
    const [data, setData] = useState([]);
    const [servicesInfo, setServicesInfo] = useContext(ServicesContext);
    useEffect(() => {
        fetch('https://vast-badlands-41502.herokuapp.com/servicesInfo')
        .then(res => res.json())
        .then(json => {
            setData(json)
            setServicesInfo(json);
        })
    })
    return (
        <>
        {
            isNav && <Navbar/>
        }
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
                                    <Link to={`/admin/order/${item._id}`} className="service-card">
                                        <img src={item.img} alt="img"/>
                                        <div className="service-all-info">
                                        <div className="icon-flex">
                                            <MdFavorite className='icon'/>
                                            <h4>{item.title}</h4>
                                        </div>
                                        <h3>${item.price}</h3>
                                        <p>{item.desc}</p>
                                        </div>
                                    </Link>
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
