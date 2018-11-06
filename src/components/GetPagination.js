import React from 'react';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);
const GetPagination = (props) => {
    
    if(!logged){
        return <Redirect to='/' />
    }else{
        return (
            <div>
                <h1>Second page</h1>
                <p>This page has received an id: {props.match.params.id}</p>
            </div>
        );
    }
};

export default GetPagination;