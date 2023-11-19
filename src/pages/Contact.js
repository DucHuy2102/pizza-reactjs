import React from 'react';
import '../styles/Contact.css';
import PizzaLeft from '../assets/pizzaLeft.jpg';

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft}` }}></div>
            <div className='rightSide'>
                <h1>CONTACT US</h1>
                <form id='contact-form' method='POST'>
                    {/*  name  */}
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' placeholder='Enter full name ...' type='text'></input>

                    {/*  email */}
                    <label htmlFor='email'>Email</label>
                    <input name='email' placeholder='Enter your email ...' type='email'></input>

                    {/*  message */}
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' rows='6' placeholder='Enter your message ...'></textarea>

                    {/* button */}
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
