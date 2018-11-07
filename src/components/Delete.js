import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);

const Delete = (props) => {

    if(!logged){
        return <Redirect to='/' />
    }else{

        let token = JSON.parse(localStorage.getItem('token'));
        const headers = {
          'Content-Type': 'application/json',
          'X-MAVERICK-AUTH-TOKEN': ''+token+'' 
        }
        
        axios.delete(`http://symfony.localhost/empreendimento/${props.match.params.id}`, {headers: headers})
        //axios.delete(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
        
        return (
            <div>
                <h1>Deleted</h1>
                <p>Value with id: {props.match.params.id} was deleted</p>
            </div>
        );
    }
};

export default Delete;