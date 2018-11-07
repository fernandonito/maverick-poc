import React from 'react';
import axios from 'axios';
import { Redirect, browserHistory } from 'react-router';
import history from './history';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        username: '',
        password: '',
        token: '',
        redirect: false
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleLogin = event => {
    event.preventDefault();


    axios.post('http://symfony.localhost/login', { username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res);
        console.log(res.data.tokenResponse);
        if(res.data.tokenResponse===false){
            alert('Login Invalido');
        }else{
            this.setState({ token: res.data.tokenResponse.api_token });
            //this.setState({ token: 'maverick-token' });
            const json = JSON.stringify(this.state.token);
            localStorage.setItem('token', json);
            //window.location("/dashboard");
            this.setState({ redirect: true });
            console.log('redireciona');
        }
      });
  }

  render() {

    if (this.state.redirect) {
        return (
          <Redirect to='/dashboard'/>
        )
    }

    const json = localStorage.getItem('token');
    const logged = JSON.parse(json);
    if(logged){
      return <Redirect to='/dashboard' />
    }else{
        return (

            <div className="columns">
                <div class="column is-two-fifths">
                    <h1 class="title">Login</h1>
                    <form onSubmit={this.handleLogin}>

                        <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Username" name="username" onChange={this.handleUsernameChange} />
                        </div>
                        </div>

                        <div class="field">
                        <label class="label">Senha</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Senha" name="password" onChange={this.handlePasswordChange} />
                        </div>
                        </div>

                        <div class="field is-grouped">
                        <div class="control">
                            <button type="submit" class="button is-link">Login</button>
                        </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
  }
}

export default Login;