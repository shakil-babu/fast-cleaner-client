import React, { useState } from 'react'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    return (
        <>
             <section className="addservice-area">
                <form className='service-form'>
                    <div className="first-flex">
                    <input type="email" placeholder='Email' name='title' value={email} /> 
                    </div>
                    <button style={{marginTop:'20px'}} type='submit' className="btn style">Submit</button>
                </form>
            </section>     
        </>
    )
}

export default MakeAdmin
