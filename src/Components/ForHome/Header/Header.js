import React from 'react'
import './Header.css';
import img from '../../../images/hero-img.png';
const Header = () => {
    return (
        <>
            <section className="header-main-area">
            <div className="overly">
                <div className="container">
                        <div className="header-main-flex">
                        <div className="header-info">
                            <h6>Quality Service</h6>
                            <h1>You Hate</h1>
                            <h2>We love to Work</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br></br> elit Explicabo, praesentium?</p>

                            <button className='btn style'>Get started</button>
                        </div>

                        <div className="header-hero-img">
                            <img src={img} alt="img"/>
                        </div>
                        </div>

                    </div>
            </div>
            </section>   
        </>
    )
}

export default Header
