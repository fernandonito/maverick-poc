import React from 'react';
import LineDemo from './LineDemo';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);

const HomePage = () => {
    
    if(!logged){
        return <Redirect to='/' />
    }else{
        return (
            <div>
                <h1>Dashboard</h1>
                <LineDemo/>
            </div>
        );
    }
};

export default HomePage;