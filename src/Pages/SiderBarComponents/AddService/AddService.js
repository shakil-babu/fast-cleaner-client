import React, { useState } from 'react'
import './AddService.css';
import axios from 'axios';
const AddService = () => {
    const [serviceData, setServiceData] = useState({title:'', img:'', desc:'', price:''})

    // input blur handler
    const InputBlurHandler = (event) => {
        setServiceData({
            ...serviceData,
            [event.target.name]: event.target.value 
        })
    }

     // img handler
   const imgHandler = (event) => {
        const imgData = new FormData();
        imgData.set('key', 'f37421e34678774c38000dc0a5b30021');
        imgData.append('image', event.target.files[0])
        console.log(event.target.files[0]);

        // fetch
        axios.post('https://api.imgbb.com/1/upload', 
        imgData)
        .then(function (response) {
            setServiceData({...serviceData, img:response.data.data.display_url})
            console.log(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
    });

}

// form submit handler 
const submitHandler = (event) => {
    event.preventDefault();

    const serviceInfo = {
        title:serviceData.title,
        img:serviceData.img,
        price:serviceData.price,
        desc:serviceData.desc
    }

    // post data to database
    fetch(`http://localhost:5500/addService`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(serviceInfo),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        });

        setServiceData({title:'', desc:'', img:'', price:''})

}
    return (
        <>
            <section className="addservice-area">
                <form className='service-form' onSubmit={submitHandler}>
                    <div className="first-flex">
                    <input type="text" placeholder='Service Title' onChange={InputBlurHandler} name='title' value={serviceData.title} /> 
                    <div className="img-service">
                        <p>Upload image</p>
                        <input onChange={imgHandler} type="file" name="img"/>
                    </div>
                    </div>

                    <textarea onChange={InputBlurHandler} placeholder='Description' name="desc"  cols="30" rows="5" value={serviceData.desc} ></textarea> <br/>
                    <input style={{marginBottom:'20px'}} className='input' type="number" placeholder='$ price' name='price' onChange={InputBlurHandler} value={serviceData.price} /> <br/>

                    {
                        serviceData.img ? <button type='submit' className="btn style">Submit</button>: <button disabled type='submit' className='btn gray'>Disabled</button>
                    }
                </form>
            </section>   
        </>
    )
}

export default AddService
