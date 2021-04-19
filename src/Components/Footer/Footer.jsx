import React from 'react'
import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <section className="footer-area">
                <div className="container">
                    <div className="footer-info-grid">
                        <div className="footer-logo">
                            <h4>Fast. Cleaner</h4>
                            <p>With over 20 years of experience in the cleaning industry our reputation has grown and grown. And we owe it all to you, our clients.</p>
                        </div>
                        <div className="services-footer">
                            <h4>Services Type</h4>
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Primium</li>
                            <li>Our Process</li>
                        </div>

                        <div className="contact-footer">
                            <h4>Contact Info</h4>
                            <p>234 Lorem Street Bangladesh, IL 34229.</p>
                            <p>+00817342999</p>
                        </div>
                    </div>
                </div>

                <div className="footer-area">
                <h4>&copy; Copyright by Fast. Cleaner</h4>
                <div className="social-icons-flex">
                    <FaFacebook className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaGithub className='icon'/>
                </div>
                </div>
            </section>   
        </>
    )
}

export default Footer
