import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class EditForm extends Component {

    state = {
        id: this.props.obj.id,
        name: this.props.obj.name,
        price: this.props.obj.price,
        text: this.props.obj.text,
        status: this.props.obj.status
      }
    
      handleNameChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handlePriceChange = event => {
        this.setState({ price: event.target.value });
      }
    
      handleTextChange = event => {
        this.setState({ text: event.target.value });
      }
    
      handleStatusChange = event => {
        this.setState({ status: event.target.value });
      }
    
    
    
      handleSubmit = event => {
        event.preventDefault();
    
        axios.put('http://symfony.localhost/empreendimento', { 
        //axios.put('https://jsonplaceholder.typicode.com/posts/1', { 
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            text: this.state.text,
            status: this.state.status
         }, {headers: {
            'Content-Type': 'application/json',
            'X-MAVERICK-AUTH-TOKEN': 'meu-token-secreto-encriptado' 
        }})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

  render() {
    const json = localStorage.getItem('token');
    const logged = JSON.parse(json);
    if(!logged){
      return <Redirect to='/' />
    }else{
        return (
            <div className="columns">
                <div class="column is-two-fifths">
                <form onSubmit={this.handleSubmit}>

                    <div class="field">
                    <label class="label">Nome</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome" name="name" defaultValue={this.props.obj.nome} onChange={this.handleNameChange} />
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Preço</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Preço" name="price" defaultValue={this.props.obj.price} onChange={this.handlePriceChange} />
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Text</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text" name="text" defaultValue={this.props.obj.text} onChange={this.handleTextChange} />
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Status</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text" name="status" defaultValue={this.props.obj.status} onChange={this.handleStatusChange} />
                    </div>
                    </div>

                    <div class="field is-grouped">
                    <div class="control">
                        <button type="submit" class="button is-link">Submit</button>
                    </div>
                    </div>

                </form>
                </div>
            </div>
        );
    }
  }
}

export default EditForm;