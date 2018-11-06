import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);


const NotFoundPage = () => {
    
    if(!logged){
        return <Redirect to='/' />
    }else{
        return (
            <div>
                404 - <Link to="/">Go home</Link>
            </div>
        );
    }
};

export default NotFoundPage;