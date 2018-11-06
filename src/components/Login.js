import React from 'react';
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        username: '',
        password: ''
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


    //axios.post('http://symfony.localhost/empreendimento', { user })
    axios.post('http://symfony.localhost/login', { username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.status===200){
            alert('logado');
        }else{
            alert('login invalido');
        }
      })
  }

  render() {
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

export default Login;