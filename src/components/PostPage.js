import React from 'react';
import axios from 'axios';
import validator from 'validator';

export default class PostPage extends React.Component {
  state = {
    name : "",
    price: "",
    text: "",
    status : ""
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

    const user = {
      name: this.state.name,
      price: this.state.price,
      text: this.state.text,
      status: this.state.status
    };


    axios.post('http://symfony.localhost/empreendimento', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="columns">
        <div class="column is-two-fifths">
          <form onSubmit={this.handleSubmit}>

            <div class="field">
              <label class="label">Nome</label>
              <div class="control">
                <input class="input" type="text" placeholder="Nome" name="name" onChange={this.handleNameChange} />
              </div>
            </div>

            <div class="field">
              <label class="label">Preço</label>
              <div class="control">
                <input class="input" type="text" placeholder="Preço" name="price" onChange={this.handlePriceChange} />
              </div>
            </div>

            <div class="field">
              <label class="label">Text</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text" name="text" onChange={this.handleTextChange} />
              </div>
            </div>

            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text" name="status" onChange={this.handleStatusChange} />
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
    )
  }
}