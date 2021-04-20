import React, { useState } from 'react'
import './Sidebar.css';
import {AiOutlineUnorderedList, AiFillMessage, AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddReview from './ForUser/AddReview/AddReview';
const Sidebar = () => {
    const [action, setAction] = useState({
        book:true, bookingList:false,review:false
    })

    // for manage
    const bookHandler = () => {
        setAction({
            book:true,bookingList:false,review:false
        })
    }

    // for add
    const bookingListHandler = () => {
        setAction({
            book:false,bookingList:true,review:false
        })
    }

    // for review
    const reviewHandler = () => {
        setAction({
            book:false, bookingList:false , review:true
        })
    }

    return (
        <>
            <section className="sidebar-main-area">

                <div className="sidebar-left-main-part">
                    <h1>Fast. Cleaner</h1>

                    <div onClick = {bookHandler} className={action.book ? 'action-flex bg':'action-flex'}>
                        <AiOutlineShoppingCart className='action-icon'/>
                        <p>Book</p>
                    </div>
                    <div onClick={bookingListHandler} className={action.bookingList ? 'action-flex bg':'action-flex'}>
                        <AiOutlineUnorderedList className='action-icon'/>
                        <p>Booking List</p>
                    </div>
                    <div onClick={reviewHandler} className={action.review ? 'action-flex bg':'action-flex'}>
                        <AiFillMessage className='action-icon'/>
                        <p>Review</p>
                    </div>
                    
                </div>

                <div className="all-info-part">
                    <div className="appbar">
                        <h2> {action.book ? 'Book': action.bookingList? 'Booking list' :  'Review'}</h2>
                        <Link className='book-link' to='/'><button className='btn style'>Go to home</button></Link>
                    </div>
                    
                    <div className="info-main-part-here">
                        {
                            action.book ? (
                                <h3>I am book</h3>
                            ): action.bookingList ? (
                                <h3>I am bookingList</h3>
                            ):(
                                <AddReview/>
                            )
                        }
                    </div>
                </div>
            </section> 

             
        </>
    )
}

export default Sidebar
