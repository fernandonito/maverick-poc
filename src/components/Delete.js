import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);

const Delete = (props) => {

    const headers = {
        'Content-Type': 'application/json',
        'X-MAVERICK-AUTH-TOKEN': 'meu-token-secreto-encriptado' 
    }
    
    axios.delete(`http://symfony.localhost/empreendimento/${props.match.params.id}`, {headers: headers})
    //axios.delete(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
    });

    if(!logged){
        return <Redirect to='/' />
    }else{
        return (
            <div>
                <h1>Deleted</h1>
                <p>Value with id: {props.match.params.id} was deleted</p>
            </div>
        );
    }
};

export default Delete;