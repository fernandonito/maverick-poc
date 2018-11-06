import React from 'react';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);

const ContactPage = () => {
    
    if(!logged){
        return <Redirect to='/' />
    }else{
        return (
            <div>
                <h1>Contact me</h1>
                <p>My email is email@email.com</p>
            </div>
        )
    }
};

export default ContactPage;