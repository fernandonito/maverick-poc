import React from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class GetPage extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      //axios.get('http://symfony.localhost/empreendimento')
      const headers = {
          'Content-Type': 'application/json',
          'X-MAVERICK-AUTH-TOKEN': 'meu-token-secreto-encriptado' 
      }

      axios.get(this.props.apiUrl, {headers: headers})
        .then(res => {
          const persons = res.data.empreendimento;
          this.setState({ persons });
          //console.log(persons);
        })
    }

    tabRow(){
        return this.state.persons.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }
  
    render() {
      return (
        
            <table className="table">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Nome</td>
                  <td>Preço</td>
                  <td>Texto</td>
                  <td>Status</td>
                  <td>Editar</td>
                  <td>Deletar</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
      );
    }
  }
  