import React from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Redirect } from 'react-router';

export default class SearchPage extends React.Component {
  state = {
    name : '',
    status: '',
    empreendimento: [
      {
        id: '',
        nome: '',
        price: '',
        text: '',
        status: ''
      }
    ]
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(this.props.apiUrl, { name: this.state.name }, {headers: {
      'Content-Type': 'application/json',
      'X-MAVERICK-AUTH-TOKEN': 'meu-token-secreto-encriptado' 
  }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ status: res.status });
        if(res.data.empreendimento){
          this.setState({ empreendimento: res.data.empreendimento });
        }
      })
  }

  tabRow(){
      return this.state.empreendimento.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
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
              <h1>Search by name:</h1>
              <div class="field has-addons">
                  <div class="control">
                      <input class="input" type="text" placeholder="Nome" name="name" onChange={this.handleNameChange} />
                  </div>
                  <div class="control">
                      <button type="submit" class="button is-info">Search</button>
                  </div>
              </div>


              { this.state.status===200 && <div><p>Status da resposta: {this.state.status}</p><table className="table"> <thead> <tr> <td>ID</td><td>Nome</td><td>Preço</td><td>Texto</td><td>Status</td><td>Editar</td><td>Deletar</td></tr></thead> <tbody>{this.tabRow()}</tbody> </table></div> }

            </form>
            </div>
        </div>
      );
    }
  }
}