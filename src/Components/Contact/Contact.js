import React from 'react'
import './Contact.css';
import Navbar from '../Navbar/Navbar';
const Contact = ({isNav}) => {
    return (
        <>
        {isNav && <Navbar/>}
            <section className="contact-main-area">
                
                <div className="form-container">
                    <div className="services-info">
                        <h5>Contact Us</h5>
                        <h2>Let us handle your </h2>
                        <h3>Project Professionally.</h3>
                        <div className="line"></div>
                    </div>

                    <form className="form-area">
                        <div className="input-flex">
                            <input type="text" placeholder='First Name' name='fname'/>
                            <input type="text" placeholder='Last Name'name='lname'/>
                        </div>
                        <div className="input-flex">
                            <input type="email" placeholder='Email Address' name='email'/>
                            <input type="number" placeholder='Phone Number'name='phone'/>
                        </div>
                        <textarea className='text-area' name="message" cols="30" rows="5" placeholder='message' ></textarea>

                        <button className='btn style' type='submit'>Send</button>
                    </form>
                </div>
            </section>   
        </>
    )
}

export default Contact
