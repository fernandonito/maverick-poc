import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './EditForm';
import { Redirect } from 'react-router';
class Edit extends Component {

    state = {
        persons: []
    }

    headers = {
        'Content-Type': 'application/json',
        'X-MAVERICK-AUTH-TOKEN': 'meu-token-secreto-encriptado' 
    }
    
    componentDidMount() {
        axios.get(`http://symfony.localhost/empreendimento/${this.props.match.params.id}`, {headers: headers})
        //axios.get('http://maverick-api.localhost/get-id.php')
          .then(res => {
            const persons = res.data.empreendimento;
            this.setState({ persons });
            //console.log(persons);
          })
    }

    editForm(){
        return this.state.persons.map(function(object, i){
            return <EditForm obj={object} key={i} />;
        });
    }

    render() {
        const json = localStorage.getItem('token');
      const logged = JSON.parse(json);
      if(!logged){
        return <Redirect to='/' />
      }else{
        return (
            <div>
                <h1>Edit page</h1>
                <p>Value with id: {this.props.match.params.id}</p>
                {this.editForm()}
            </div>
        );
      }
    }
}
  
export default Edit;