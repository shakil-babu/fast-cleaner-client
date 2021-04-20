import React, { useEffect, useState } from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import './AddReview.css';
const AddReview = () => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({
        name:'', company:'', review:''
    })

    // inputBlur Handler
    const blurHandler = (e) => {
        setData({
            ...data, 
            [e.target.name]:e.target.value
        })
     }

     // submit handler
     const submitHandler = (e) => {
         e.preventDefault();

         console.log(data);
         // post data to database
        fetch(`http://localhost:5500/addReview`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((json) => {
                if(json){
                    setSuccess(true);
                }
            });

            setData({name:'', company:'', review:''})

    }

    useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 5000);   
     })

    return (
        <>
            <section className="add-review-form">
                <form onSubmit={submitHandler} className='review-form-area'>
                    <input onChange={blurHandler} type="text" placeholder='Name' name='name' value ={data.name} required/> <br/>
                    <input onChange={blurHandler} type="text" placeholder='Company name - Designation' name='company' value={data.company} required/> <br/>
                    <textarea onChange={blurHandler} name="review" cols="30" rows="5" placeholder='Review' value={data.review} required></textarea>
                    <br/>
                    {
                        success && (
                            <div className="flex-review-icon">
                                <AiFillCheckCircle className='icon'/>
                                <p>Successfully Inserted!</p>
                            </div>
                        )
                    }
                    <button type='submit' className='btn style'>Submit</button>
                </form>
            </section>   
        </>
    )
}

export default AddReview
