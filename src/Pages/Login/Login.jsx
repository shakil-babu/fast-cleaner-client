import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import icon from '../../images/icons/google.png';
import './Login.css';
const Login = () => {
    return (
        <>
            <Navbar/>
            <section className="login-main-area">
                <button className="continue-with-google">
                    <img src={icon} alt="icon"/>
                    <h4>Continue with Google</h4>

                </button>
            </section>   
        </>
    )
}

export default Login
