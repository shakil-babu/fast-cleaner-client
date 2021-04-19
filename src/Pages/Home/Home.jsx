import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Header from '../../Components/ForHome/Header/Header'
import Services from '../../Components/ForHome/Services/Services'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
    return (
        <>
             <section>
                 <Navbar/>
                 <Header/>

                 <Services/>

                 <Contact  isNav={false} />
            </section>   
        </>
    )
}

export default Home
