import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Header from '../../Components/ForHome/Header/Header'
import Pricing from '../../Components/ForHome/Pricing/Pricing'
import Project from '../../Components/ForHome/Project/Project'
import Services from '../../Components/ForHome/Services/Services'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/ForHome/Testimonial/Testimonial'

const Home = () => {
    return (
        <>
             <section>
                 <Navbar/>
                 <Header/>
                 <Services/>
                <Project/>
                <Pricing/>
                <Testimonial/>
                 <Contact  isNav={false} />
            </section>   
        </>
    )
}

export default Home
