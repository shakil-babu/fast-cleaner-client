import React, { useState } from 'react'
import './Sidebar.css';
import {AiOutlineAppstoreAdd, AiOutlinePlus} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [action, setAction] = useState({
        manage:true,
        add:false
    })

    // for manage
    const manageHandler = () => {
        setAction({
            manage:true,
            add:false
        })
    }

    // for add

    const addHandler = () => {
        setAction({
            manage:false,
            add:true
        })
    }
    return (
        <>
            <section className="sidebar-main-area">

                <div className="sidebar-left-main-part">
                    <h1>BOOK SHOP</h1>

                    <div onClick = {manageHandler} className={action.manage ? 'action-flex bg':'action-flex'}>
                        <AiOutlineAppstoreAdd className='action-icon'/>
                        <p>Manage Books</p>
                    </div>
                    <div onClick={addHandler} className={action.add ? 'action-flex bg':'action-flex'}>
                        <AiOutlinePlus className='action-icon'/>
                        <p>Add Book</p>
                    </div>
                    
                </div>

                <div className="all-info-part">
                    <div className="appbar">
                        <h2> {action.add ? 'Add': 'Manage'} Book</h2>
                        <Link className='book-link' to='/'><button className='search-btn'>Go to home</button></Link>
                    </div>
                    
                    <div className="info-main-part-here">
                        {
                            action.manage ? (
                                <p>I am manage</p>
                            ):(
                                <div className="">
                                    add book component
                                </div>
                            )
                        }
                    </div>
                </div>
            </section> 

             
        </>
    )
}

export default Sidebar
