import React from 'react';
import axios from 'axios';

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

    //axios.post('http://symfony.localhost/empreendimento', { user })
    axios.post(this.props.apiUrl, { name: this.state.name })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ status: res.status });
        if(res.empreendimento){
          this.setState({ empreendimento: res.empreendimento });
        }
      })
  }

  render() {
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

            {this.state.status && <p>Status da resposta: {this.state.status}</p>}
            {this.state.empreendimento.id && <p>ID: {this.state.empreendimento.id}</p>}
            {this.state.empreendimento.nome && <p>Nome: {this.state.empreendimento.nome}</p>}
            {this.state.empreendimento.price && <p>Price: {this.state.empreendimento.price}</p>}
            {this.state.empreendimento.text && <p>Text: {this.state.empreendimento.text}</p>}
            {this.state.empreendimento.status && <p>Status: {this.state.empreendimento.status}</p>}

          </form>
          </div>
      </div>
    )
  }
}