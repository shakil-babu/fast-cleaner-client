import React, { useState } from 'react'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    // onchange
    const changeHandler = (e) => {
        setEmail(e.target.value)
    }

    // submit
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        fetch(`http://localhost:5500/makeAdmin`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({email:email}),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
        setEmail('');
    }
    return (
        <>
             <section className="addservice-area">
                <form onSubmit={submitHandler} className='service-form'>
                    <div className="first-flex">
                    <input onChange={changeHandler} type="email" placeholder='Email' name='title' value={email} /> 
                    </div>
                    <button style={{marginTop:'20px'}} type='submit' className="btn style">Submit</button>
                </form>
            </section>     
        </>
    )
}

export default MakeAdmin
