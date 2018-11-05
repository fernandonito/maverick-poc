import React from 'react';
import axios from 'axios';
import validator from 'validator';

export default class PostPage extends React.Component {
  state = {
    name: '',
    username: '',
    email: ''
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email
    };

    if(!validator.isEmail(this.state.email) && !validator.isEmpty(this.state.email)){
      return alert('Email invalido');
    }

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
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
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" placeholder="Username" name="username" onChange={this.handleUsernameChange} />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} />
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